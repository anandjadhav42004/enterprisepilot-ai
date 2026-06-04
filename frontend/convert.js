import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const srcDir = path.resolve('../stitch_screens');
const destPagesDir = path.resolve('./src/pages');
const destComponentsDir = path.resolve('./src/components');

fs.mkdirSync(destPagesDir, { recursive: true });
fs.mkdirSync(destComponentsDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

function toCamelCase(str) {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
}

function kebabToPascal(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function convertHtmlToJsx(html) {
  if (!html) return '';
  let jsx = html;
  
  // class -> className, for -> htmlFor
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // close void elements correctly
  const voidElements = ['input', 'img', 'br', 'hr', 'meta', 'link'];
  voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*[^/])>`, 'g');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });
  
  // replace styles
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    const styleObj = {};
    styles.split(';').forEach(s => {
      if (!s.trim()) return;
      let [key, ...valParts] = s.split(':');
      let val = valParts.join(':');
      if (!key || !val) return;
      key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[key] = val.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // inline handlers
  jsx = jsx.replace(/onclick=/g, 'onClick=');
  jsx = jsx.replace(/onClick="document.getElementById\('([^']+)'\).style.display='none'"/g, `onClick={(e) => { const el = document.getElementById('$1'); if (el) el.style.display='none'; }}`);
  
  // Strip comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  return jsx;
}

let sidebarJsx = '';
let headerJsx = '';

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const $ = cheerio.load(content);
  
  if (file === 'dashboard.html') {
    const nav = $('nav[aria-label="Sidebar"]').prop('outerHTML');
    if (nav) {
      sidebarJsx = convertHtmlToJsx(nav);
      sidebarJsx = sidebarJsx.replace(/<a ([^>]*)href="#"([^>]*)>/g, '<Link $1to="/dashboard"$2>');
    }
    
    const header = $('header').prop('outerHTML');
    if (header) {
      headerJsx = convertHtmlToJsx(header);
    }
  }
  
  // Find <main> or fallback to <body>
  let mainHtml = $('main').html();
  let wrapperClass = "flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto";
  
  if (!mainHtml) {
    // some pages like login might just have body content, no main.
    // Strip nav, header, script, style from body
    $('nav, header, script, style').remove();
    mainHtml = $('body').html();
    wrapperClass = "w-full h-full flex flex-col"; // general wrapper for pages without main
  }
  
  const jsxMain = convertHtmlToJsx(mainHtml);
  
  const baseName = path.basename(file, '.html');
  let componentName = kebabToPascal(baseName) + 'Page';
  if (componentName === 'AiCopilotPage') componentName = 'AICopilotPage';
  if (componentName === 'AiAuditLogsPage') componentName = 'AIAuditLogsPage';
  
  const isLogin = baseName === 'login';
  
  const componentTemplate = `
import React from 'react';
import { Link } from 'react-router-dom';

export default function ${componentName}() {
  return (
    <div className="${wrapperClass}">
      ${jsxMain}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(destPagesDir, `${componentName}.jsx`), componentTemplate.trim() + '\\n');
  console.log(`Generated ${componentName}.jsx`);
});

fs.writeFileSync(path.join(destComponentsDir, 'Sidebar.jsx'), `
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    ${sidebarJsx}
  );
}
`.trim() + '\\n');

fs.writeFileSync(path.join(destComponentsDir, 'Header.jsx'), `
import React from 'react';

export default function Header() {
  return (
    ${headerJsx}
  );
}
`.trim() + '\\n');

fs.writeFileSync(path.join(destComponentsDir, 'Layout.jsx'), `
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-on-surface font-body-md antialiased">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
`.trim() + '\\n');

console.log("Finished converting all components.");
