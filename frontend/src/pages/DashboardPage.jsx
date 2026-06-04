import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      

<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Overview</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Monitor operational health and AI insights.</p>
</div>
<div className="flex items-center gap-sm">
<button className="h-[36px] px-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>add_task</span>
                        New Task
                    </button>
<button className="h-[36px] px-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>summarize</span>
                        Generate Report
                    </button>
<button className="h-[36px] px-4 bg-primary-container text-on-primary-container border border-primary-container rounded-lg font-body-sm text-body-sm hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined ai-sparkle" style={{"fontSize":"18px"}}>magic_button</span>
                        Ask Copilot
                    </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex items-start sm:items-center justify-between gap-md shadow-sm relative overflow-hidden ai-border" id="onboarding-banner">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-tertiary-fixed-dim/10 to-transparent pointer-events-none"></div>
<div className="flex items-start sm:items-center gap-md relative z-10">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined ai-sparkle" style={{"fontSize":"24px"}}>smart_toy</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Welcome to EnterprisePilot AI</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Explore the AI Copilot to automate workflows, analyze inventory risks, and optimize your daily operations.</p>
</div>
</div>
<button aria-label="Dismiss banner" className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors shrink-0 relative z-10" onClick={(e) => { const el = document.getElementById('onboarding-banner'); if (el) el.style.display='none'; }}>
<span className="material-symbols-outlined" style={{"fontSize":"20px"}}>close</span>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md">

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col justify-between">
<div className="flex items-center justify-between mb-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Total Inventory Value</span>
<span className="material-symbols-outlined text-outline" style={{"fontSize":"18px"}}>account_balance_wallet</span>
</div>
<div>
<span className="font-data-mono text-data-mono text-2xl text-on-surface">$1.2M</span>
<div className="flex items-center gap-1 mt-1 text-[#009668]">
<span className="material-symbols-outlined" style={{"fontSize":"14px"}}>trending_up</span>
<span className="font-body-sm text-body-sm text-[10px] font-medium">+2.4% vs last mo</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col justify-between">
<div className="flex items-center justify-between mb-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Low Stock Items</span>
<span className="material-symbols-outlined text-outline" style={{"fontSize":"18px"}}>inventory_2</span>
</div>
<div>
<span className="font-data-mono text-data-mono text-2xl text-on-surface">14</span>
<div className="flex items-center gap-1 mt-1 text-error">
<span className="material-symbols-outlined" style={{"fontSize":"14px"}}>warning</span>
<span className="font-body-sm text-body-sm text-[10px] font-medium">Action required</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col justify-between">
<div className="flex items-center justify-between mb-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Open Tasks</span>
<span className="material-symbols-outlined text-outline" style={{"fontSize":"18px"}}>assignment</span>
</div>
<div>
<span className="font-data-mono text-data-mono text-2xl text-on-surface">28</span>
<div className="flex items-center gap-1 mt-1 text-on-surface-variant">
<span className="font-body-sm text-body-sm text-[10px] font-medium">Across 4 projects</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-error/30 rounded-lg p-md flex flex-col justify-between bg-error-container/10">
<div className="flex items-center justify-between mb-sm">
<span className="font-label-caps text-label-caps text-on-error-container uppercase">Delayed Tasks</span>
<span className="material-symbols-outlined text-on-error-container" style={{"fontSize":"18px"}}>schedule</span>
</div>
<div>
<span className="font-data-mono text-data-mono text-2xl text-on-error-container">3</span>
<div className="flex items-center gap-1 mt-1 text-on-error-container">
<span className="font-body-sm text-body-sm text-[10px] font-medium">Critical path affected</span>
</div>
</div>
</div>

<div className="bg-primary-container text-on-primary-container border border-primary-container rounded-lg p-md flex flex-col justify-between relative overflow-hidden col-span-2 lg:col-span-1">
<div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-fixed-dim/20 rounded-full blur-xl -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-sm relative z-10">
<span className="font-label-caps text-label-caps uppercase text-on-primary-container">AI Actions Today</span>
<span className="material-symbols-outlined ai-sparkle" style={{"fontSize":"18px"}}>auto_awesome</span>
</div>
<div className="relative z-10">
<span className="font-data-mono text-data-mono text-2xl">7</span>
<div className="flex items-center gap-1 mt-1">
<span className="font-body-sm text-body-sm text-[10px] font-medium opacity-80">Saved approx. 2.5 hrs</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-md">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md lg:col-span-2 flex flex-col ai-border">
<div className="flex items-center justify-between mb-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined ai-sparkle" style={{"fontSize":"20px"}}>lightbulb</span>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Recent AI Recommendations</h3>
</div>
<button className="text-secondary font-body-sm text-body-sm font-medium hover:underline">View All</button>
</div>
<div className="flex-1 space-y-xs">

<div className="group flex items-start gap-sm p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-outline-variant/50">
<div className="mt-0.5 w-6 h-6 rounded-full bg-error-container/50 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-error-container" style={{"fontSize":"14px"}}>production_quantity_limits</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<h4 className="font-body-md text-body-md font-semibold text-on-surface truncate">Reorder SKU-204</h4>
<span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant whitespace-nowrap">10m ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Stock below 15% threshold. Projected stockout in 3 days based on current demand velocity.</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-surface-container-lowest border border-outline-variant rounded-md text-secondary hover:bg-secondary hover:text-on-secondary shrink-0">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>bolt</span>
</button>
</div>
<div className="h-px w-full bg-outline-variant/30"></div>

<div className="group flex items-start gap-sm p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-outline-variant/50">
<div className="mt-0.5 w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-surface" style={{"fontSize":"14px"}}>warehouse</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<h4 className="font-body-md text-body-md font-semibold text-on-surface truncate">Optimize Warehouse Zone B</h4>
<span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant whitespace-nowrap">1h ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Consolidating pallets in aisles 4-6 could improve picking efficiency by estimated 12%.</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-surface-container-lowest border border-outline-variant rounded-md text-secondary hover:bg-secondary hover:text-on-secondary shrink-0">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>bolt</span>
</button>
</div>
<div className="h-px w-full bg-outline-variant/30"></div>

<div className="group flex items-start gap-sm p-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-outline-variant/50">
<div className="mt-0.5 w-6 h-6 rounded-full bg-[#009668]/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[#009668]" style={{"fontSize":"14px"}}>local_shipping</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<h4 className="font-body-md text-body-md font-semibold text-on-surface truncate">Route Reroute Suggestion</h4>
<span className="font-data-mono text-data-mono text-[10px] text-on-surface-variant whitespace-nowrap">2h ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Traffic anomalies detected on Delivery Route 7. Alternative route saves 45 mins.</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-surface-container-lowest border border-outline-variant rounded-md text-secondary hover:bg-secondary hover:text-on-secondary shrink-0">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>bolt</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col gap-md lg:col-span-1">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col">
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-sm">Inventory Risk Profile</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Current distribution of capital risk.</p>

<div className="flex flex-col gap-sm mt-auto">

<div className="flex items-center gap-sm">
<span className="w-16 font-label-caps text-label-caps text-on-surface-variant">HIGH</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error" style={{"width":"15%"}}></div>
</div>
<span className="w-8 text-right font-data-mono text-data-mono text-[11px] text-on-surface">15%</span>
</div>

<div className="flex items-center gap-sm">
<span className="w-16 font-label-caps text-label-caps text-on-surface-variant">MEDIUM</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-[#f59e0b]" style={{"width":"35%"}}></div>
</div>
<span className="w-8 text-right font-data-mono text-data-mono text-[11px] text-on-surface">35%</span>
</div>

<div className="flex items-center gap-sm">
<span className="w-16 font-label-caps text-label-caps text-on-surface-variant">LOW</span>
<div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-[#009668]" style={{"width":"50%"}}></div>
</div>
<span className="w-8 text-right font-data-mono text-data-mono text-[11px] text-on-surface">50%</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col">
<div className="flex justify-between items-center mb-sm">
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Sprint Q3-A</h3>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-caps text-label-caps text-on-surface-variant">ACTIVE</span>
</div>
<div className="mt-2 mb-4">
<div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant mb-1">
<span>Progress</span>
<span className="font-data-mono text-data-mono font-bold text-on-surface">68%</span>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"68%"}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<div className="p-2 bg-surface rounded flex flex-col">
<span className="font-data-mono text-data-mono text-lg text-on-surface">24</span>
<span className="font-body-sm text-body-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Completed</span>
</div>
<div className="p-2 bg-surface rounded flex flex-col">
<span className="font-data-mono text-data-mono text-lg text-on-surface">11</span>
<span className="font-body-sm text-body-sm text-[10px] text-on-surface-variant uppercase tracking-wider">Remaining</span>
</div>
</div>
</div>
</div>
</div>

    </div>
  );
}