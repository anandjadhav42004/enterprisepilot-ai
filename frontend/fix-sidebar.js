import fs from 'fs';
import path from 'path';

const sidebarPath = path.resolve('./src/components/Sidebar.jsx');
let content = fs.readFileSync(sidebarPath, 'utf8');

// The original HTML had these links: Dashboard, Analytics, Team, Workflows, Settings, Help, Support
// We'll update the 'to' paths manually based on text.
const routeMap = {
  'Dashboard': '/dashboard',
  'Analytics': '/analytics',
  'Team': '/inventory', // Remap for demo
  'Workflows': '/warehouse', // Remap for demo
  'Settings': '/settings',
  'Help': '/ai-copilot', // Remap for demo
  'Support': '/reports' // Remap for demo
};

for (const [text, route] of Object.entries(routeMap)) {
  const regex = new RegExp(\`<Link ([^>]*to=")[^"]*("[^>]*>[\\\\s\\\\S]*?<span[^>]*>[\\\\s\\\\S]*?${text}<\\\\/span>)\`, 'g');
  content = content.replace(regex, \`<Link $1${route}$2\`);
}

fs.writeFileSync(sidebarPath, content);
console.log('Sidebar fixed');
