import React from 'react';
import { Link } from 'react-router-dom';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      
<div className="max-w-[1400px] mx-auto space-y-lg">

<div className="flex flex-col @3xl:flex-row @3xl:items-center justify-between gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Analytics Hub</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Real-time performance and predictive insights across all facilities.</p>
</div>
<div className="flex flex-wrap items-center gap-sm p-sm bg-surface-container-lowest border border-outline-variant rounded-lg">
<div className="flex items-center border-r border-outline-variant pr-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-xs">calendar_today</span>
<select className="bg-transparent border-none text-on-surface font-body-sm text-body-sm focus:ring-0 cursor-pointer py-1 pl-1 pr-6">
<option>Last 30 Days</option>
<option>Q3 2024</option>
<option>Year to Date</option>
</select>
</div>
<div className="flex items-center border-r border-outline-variant pr-sm pl-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-xs">warehouse</span>
<select className="bg-transparent border-none text-on-surface font-body-sm text-body-sm focus:ring-0 cursor-pointer py-1 pl-1 pr-6">
<option>All Warehouses</option>
<option>EU-Frankfurt-01</option>
<option>US-East-Alpha</option>
</select>
</div>
<div className="flex items-center pl-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-xs">category</span>
<select className="bg-transparent border-none text-on-surface font-body-sm text-body-sm focus:ring-0 cursor-pointer py-1 pl-1 pr-6">
<option>All Categories</option>
<option>Electronics</option>
<option>Apparel</option>
</select>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex gap-md relative overflow-hidden border-l-4 border-l-tertiary-fixed-dim shadow-sm">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-tertiary-fixed-dim/10 rounded-full blur-2xl"></div>
<div className="mt-1 flex-shrink-0 text-tertiary-fixed-dim">
<span className="material-symbols-outlined filled text-[24px]">auto_awesome</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
                            AI Executive Summary
                        </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs max-w-3xl leading-relaxed">
                            Seasonal demand for Electronics is up 15% across European facilities, driving an aggregate efficiency increase. However, predictive modeling indicates a 72% probability of stockouts in US-East-Alpha for high-velocity SKUs within the next 14 days if replenishment is not expedited.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 @2xl:grid-cols-2 @4xl:grid-cols-3 gap-gutter">

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col col-span-1 @2xl:col-span-2 relative overflow-hidden">
<div className="p-md border-b border-outline-variant flex justify-between items-center">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Inventory Value Trends</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Moving 30-day average ($M)</p>
</div>
<button className="h-[28px] px-sm flex items-center gap-xs rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container font-body-sm text-body-sm transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span>
                                Export
                            </button>
</div>
<div className="p-md flex-1 min-h-[280px] relative flex flex-col justify-end gap-1">

<div className="absolute inset-0 p-md pb-xl">
<svg className="w-full h-full overflow-visible" height="100%" preserveAspectRatio="none" viewBox="0 0 800 200" width="100%">

<line stroke="#e1e2e4" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="100%" y1="50" y2="50"></line>
<line stroke="#e1e2e4" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="100%" y1="100" y2="100"></line>
<line stroke="#e1e2e4" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="100%" y1="150" y2="150"></line>

<path d="M0,150 C100,120 200,180 300,100 C400,20 500,80 600,40 C700,0 800,50 800,50" fill="none" stroke="#0058be" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>

<path d="M0,150 C100,120 200,180 300,100 C400,20 500,80 600,40 C700,0 800,50 800,50 L800,200 L0,200 Z" fill="url(#grad1)" opacity="0.2"></path>

<path d="M0,180 C150,160 250,140 350,150 C450,160 550,100 650,120 C750,140 800,90 800,90" fill="none" stroke="#7c839b" stroke-dasharray="4 4" stroke-linecap="round" stroke-width="2"></path>
<defs>
<linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{"stopColor":"#0058be","stopOpacity":"1"}}></stop>
<stop offset="100%" style={{"stopColor":"#0058be","stopOpacity":"0"}}></stop>
</linearGradient>
</defs>
</svg>
</div>

<div className="flex justify-between w-full font-data-mono text-data-mono text-on-surface-variant pt-2 border-t border-outline-variant/30 z-10">
<span>Aug 01</span>
<span>Aug 10</span>
<span>Aug 20</span>
<span>Aug 30</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col col-span-1">
<div className="p-md border-b border-outline-variant flex justify-between items-center">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Task Completion</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">By shift schedule</p>
</div>
<button className="h-[28px] w-[28px] flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors" title="Export">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
<div className="p-md flex-1 min-h-[280px] flex flex-col justify-end gap-md">
<div className="flex-1 flex items-end justify-around gap-2 px-sm">
<div className="w-full bg-surface-container-high rounded-t relative group">
<div className="absolute bottom-0 w-full bg-secondary-container rounded-t transition-all" style={{"height":"65%"}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono px-2 py-1 rounded text-[10px] transition-opacity">65%</div>
</div>
<div className="w-full bg-surface-container-high rounded-t relative group">
<div className="absolute bottom-0 w-full bg-secondary rounded-t transition-all" style={{"height":"88%"}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono px-2 py-1 rounded text-[10px] transition-opacity">88%</div>
</div>
<div className="w-full bg-surface-container-high rounded-t relative group">
<div className="absolute bottom-0 w-full bg-secondary-container rounded-t transition-all" style={{"height":"42%"}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono px-2 py-1 rounded text-[10px] transition-opacity">42%</div>
</div>
<div className="w-full bg-surface-container-high rounded-t relative group">
<div className="absolute bottom-0 w-full bg-secondary rounded-t transition-all" style={{"height":"75%"}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono px-2 py-1 rounded text-[10px] transition-opacity">75%</div>
</div>
<div className="w-full bg-surface-container-high rounded-t relative group">
<div className="absolute bottom-0 w-full bg-secondary-container rounded-t transition-all" style={{"height":"92%"}}></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface font-data-mono text-data-mono px-2 py-1 rounded text-[10px] transition-opacity">92%</div>
</div>
</div>
<div className="flex justify-around w-full font-label-caps text-label-caps text-on-surface-variant pt-2 border-t border-outline-variant/30">
<span>MON</span>
<span>TUE</span>
<span>WED</span>
<span>THU</span>
<span>FRI</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col col-span-1">
<div className="p-md border-b border-outline-variant flex justify-between items-center">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">System Efficiency</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Global aggregate score</p>
</div>
<button className="h-[28px] w-[28px] flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors" title="Export">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
<div className="p-md flex-1 flex flex-col items-center justify-center min-h-[280px]">
<div className="relative w-48 h-48 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#e1e2e4" stroke-width="8"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#0058be" stroke-dasharray="251.2" stroke-dashoffset="35.16" stroke-linecap="round" stroke-width="8"></circle> 
<circle cx="50" cy="50" fill="transparent" r="28" stroke="#e1e2e4" stroke-width="4"></circle>
<circle cx="50" cy="50" fill="transparent" r="28" stroke="#4edea3" stroke-dasharray="175.9" stroke-dashoffset="66.8" stroke-linecap="round" stroke-width="4"></circle> 
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-headline-lg text-headline-lg text-on-surface">86%</span>
<span className="font-label-caps text-label-caps text-on-surface-variant mt-1 text-tertiary-fixed-dim flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 2.4%
                                    </span>
</div>
</div>
<div className="mt-md flex gap-lg font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-xs">
<div className="w-3 h-3 rounded-sm bg-secondary"></div> Output Rate
                                </div>
<div className="flex items-center gap-xs">
<div className="w-3 h-3 rounded-sm bg-tertiary-fixed-dim"></div> Resource Util
                                </div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col col-span-1 @2xl:col-span-2 @4xl:col-span-3">
<div className="p-md border-b border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Low-Stock Risk Matrix</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Predictive 14-day stockout probability by zone</p>
</div>
<div className="ml-4 px-2 py-1 bg-error-container text-on-error-container rounded font-label-caps text-label-caps flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span> Critical Focus
                                </div>
</div>
<button className="h-[28px] px-sm flex items-center gap-xs rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container font-body-sm text-body-sm transition-colors">
<span className="material-symbols-outlined text-[16px]">download</span>
                                Export
                            </button>
</div>
<div className="p-md flex-1 overflow-x-auto">
<div className="min-w-[600px] grid grid-cols-6 gap-xs">

<div className="col-span-1 font-label-caps text-label-caps text-on-surface-variant flex items-end pb-sm">Zone</div>
<div className="col-span-1 text-center font-label-caps text-label-caps text-on-surface-variant pb-sm">Electronics</div>
<div className="col-span-1 text-center font-label-caps text-label-caps text-on-surface-variant pb-sm">Apparel</div>
<div className="col-span-1 text-center font-label-caps text-label-caps text-on-surface-variant pb-sm">Hardware</div>
<div className="col-span-1 text-center font-label-caps text-label-caps text-on-surface-variant pb-sm">Perishables</div>
<div className="col-span-1 text-center font-label-caps text-label-caps text-on-surface-variant pb-sm">Automotive</div>

<div className="font-data-mono text-data-mono text-on-surface py-2">Alpha-A</div>
<div className="bg-error-container/20 rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface">12%</div>
<div className="bg-error-container/40 rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface">28%</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">5%</div>
<div className="bg-error-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-error-container font-bold border border-error">82%</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">2%</div>

<div className="font-data-mono text-data-mono text-on-surface py-2">Alpha-B</div>
<div className="bg-error-container/80 rounded flex items-center justify-center font-data-mono text-[12px] text-on-error-container font-bold relative group">
                                    72%
                                    
<div className="absolute -top-10 bg-inverse-surface text-inverse-on-surface font-body-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">AI: Restock advised 48h</div>
</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">4%</div>
<div className="bg-error-container/10 rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface">8%</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">1%</div>
<div className="bg-error-container/30 rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface">15%</div>

<div className="font-data-mono text-data-mono text-on-surface py-2">Beta-C</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">0%</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">2%</div>
<div className="bg-error-container/60 rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface">45%</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">3%</div>
<div className="bg-surface-container rounded flex items-center justify-center font-data-mono text-[12px] text-on-surface-variant">0%</div>
</div>
</div>
</div>
</div>
</div>
<div className="h-16"></div> 

    </div>
  );
}