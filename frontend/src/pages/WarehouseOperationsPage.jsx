import React from 'react';
import { Link } from 'react-router-dom';

export default function WarehouseOperationsPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      
<div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-lg">

<div className="flex-1 flex flex-col gap-lg min-w-0">

<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Warehouse Operations</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">auto_awesome</span>
                            AI insights active: Optimized routing implemented 12 mins ago.
                        </p>
</div>

<section className="grid grid-cols-1 md:grid-cols-3 gap-md">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-fixed-dim"></div>
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Zone A</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">High-Velocity Picking</p>
</div>
<span className="bg-surface-container-low text-on-surface px-2 py-1 rounded font-label-caps text-label-caps">92% EFF</span>
</div>
<div className="mt-auto">
<div className="flex justify-between font-data-mono text-data-mono text-on-surface-variant mb-xs">
<span>Capacity</span>
<span className="text-on-surface">85%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5">
<div className="bg-secondary h-1.5 rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md relative overflow-hidden">
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Zone B</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bulk Storage</p>
</div>
<span className="bg-surface-container-low text-on-surface px-2 py-1 rounded font-label-caps text-label-caps">78% EFF</span>
</div>
<div className="mt-auto">
<div className="flex justify-between font-data-mono text-data-mono text-on-surface-variant mb-xs">
<span>Capacity</span>
<span className="text-error">95%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5">
<div className="bg-error h-1.5 rounded-full" style={{"width":"95%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-fixed-dim"></div>
<div className="flex justify-between items-start mb-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Zone C</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cold Chain</p>
</div>
<span className="bg-surface-container-low text-on-surface px-2 py-1 rounded font-label-caps text-label-caps">98% EFF</span>
</div>
<div className="mt-auto">
<div className="flex justify-between font-data-mono text-data-mono text-on-surface-variant mb-xs">
<span>Capacity</span>
<span className="text-on-surface">42%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5">
<div className="bg-tertiary-fixed-dim h-1.5 rounded-full" style={{"width":"42%"}}></div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="flex border-b border-outline-variant bg-surface-container-low">
<button className="px-md py-sm font-headline-sm text-headline-sm text-secondary bg-surface-container-lowest border-t-2 border-secondary font-bold">Logistics Hub</button>
<button className="px-md py-sm font-headline-sm text-headline-sm text-on-surface-variant hover:bg-surface-container transition-colors">Fulfillment Tracker</button>
</div>
<div className="p-md flex flex-col md:flex-row gap-lg">

<div className="flex-1">
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-sm uppercase border-b border-outline-variant pb-xs">Inbound Scheduled</h4>
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-center py-sm border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">local_shipping</span>
<div>
<p className="font-body-sm text-body-sm font-bold text-on-surface">SHP-9021</p>
<p className="font-data-mono text-data-mono text-on-surface-variant text-[10px]">Electronics (12 Pallets)</p>
</div>
</div>
<div className="text-right">
<p className="font-body-sm text-body-sm text-on-surface">14:00 EST</p>
<p className="font-body-sm text-body-sm text-tertiary-fixed-dim">On Time</p>
</div>
</div>
<div className="flex justify-between items-center py-sm border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">local_shipping</span>
<div>
<p className="font-body-sm text-body-sm font-bold text-on-surface">SHP-9024</p>
<p className="font-data-mono text-data-mono text-on-surface-variant text-[10px]">Apparel (4 Pallets)</p>
</div>
</div>
<div className="text-right">
<p className="font-body-sm text-body-sm text-on-surface">15:30 EST</p>
<p className="font-body-sm text-body-sm text-error">Delayed</p>
</div>
</div>
</div>
</div>

<div className="flex-1">
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-sm uppercase border-b border-outline-variant pb-xs">Outbound Dispatch</h4>
<div className="flex flex-col gap-xs">
<div className="flex justify-between items-center py-sm border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">flight_takeoff</span>
<div>
<p className="font-body-sm text-body-sm font-bold text-on-surface">FLT-BOS-1</p>
<p className="font-data-mono text-data-mono text-on-surface-variant text-[10px]">Priority Air (18 Units)</p>
</div>
</div>
<div className="text-right">
<span className="bg-tertiary-fixed-dim/20 text-on-tertiary-fixed px-2 py-0.5 rounded font-data-mono text-[10px]">Loading</span>
</div>
</div>
<div className="flex justify-between items-center py-sm border-b border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">local_shipping</span>
<div>
<p className="font-body-sm text-body-sm font-bold text-on-surface">TRK-NY-4</p>
<p className="font-data-mono text-data-mono text-on-surface-variant text-[10px]">LTL Freight</p>
</div>
</div>
<div className="text-right">
<span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded font-data-mono text-[10px]">Staged</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Active Workflows</h3>
<div className="flex gap-md overflow-x-auto pb-sm no-scrollbar">

<div className="bg-surface-container-low rounded-lg p-sm min-w-[280px] flex-1 flex flex-col gap-sm border border-outline-variant/50">
<div className="flex justify-between items-center px-xs pb-xs border-b border-outline-variant">
<span className="font-label-caps text-label-caps text-on-surface-variant">Pending</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">12</span>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm cursor-pointer hover:border-secondary transition-colors">
<div className="flex justify-between items-start mb-xs">
<span className="font-data-mono text-[10px] text-secondary bg-secondary/10 px-1 rounded">ORD-7742</span>
<span className="material-symbols-outlined text-[14px] text-error">priority_high</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mb-xs">Enterprise Batch - Server Racks</p>
<div className="flex items-center gap-xs font-body-sm text-[10px] text-on-surface-variant">
<span className="material-symbols-outlined text-[12px]">schedule</span> 15m ago
                                    </div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-sm min-w-[280px] flex-1 flex flex-col gap-sm border border-outline-variant/50">
<div className="flex justify-between items-center px-xs pb-xs border-b border-outline-variant">
<span className="font-label-caps text-label-caps text-on-surface-variant">Picking</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">8</span>
</div>

<div className="bg-surface-container-lowest border-l-2 border-l-secondary border-y border-r border-outline-variant rounded p-sm cursor-pointer hover:border-secondary transition-colors">
<div className="flex justify-between items-start mb-xs">
<span className="font-data-mono text-[10px] text-secondary bg-secondary/10 px-1 rounded">ORD-7739</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mb-xs">Standard Restock - Zone A</p>
<div className="w-full bg-surface-container-highest rounded-full h-1 mt-xs">
<div className="bg-secondary h-1 rounded-full" style={{"width":"45%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-sm min-w-[280px] flex-1 flex flex-col gap-sm border border-outline-variant/50">
<div className="flex justify-between items-center px-xs pb-xs border-b border-outline-variant">
<span className="font-label-caps text-label-caps text-on-surface-variant">Packed &amp; Staged</span>
<span className="font-data-mono text-data-mono text-on-surface-variant">24</span>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded p-sm opacity-80">
<div className="flex justify-between items-start mb-xs">
<span className="font-data-mono text-[10px] text-on-surface-variant bg-surface-container px-1 rounded">ORD-7711</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mb-xs">B2B Supplies</p>
<div className="flex items-center gap-xs font-body-sm text-[10px] text-tertiary-fixed-dim">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Ready for Bay 4
                                    </div>
</div>
</div>
</div>
</section>
</div>

<div className="w-full xl:w-80 shrink-0">
<aside className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md sticky top-lg">
<div className="flex items-center gap-sm mb-md pb-sm border-b border-outline-variant">
<span className="material-symbols-outlined text-error">warning</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Bottleneck Alerts</h3>
</div>
<div className="flex flex-col gap-sm">

<div className="bg-error-container/30 border border-error/20 rounded-lg p-sm">
<div className="flex items-start gap-sm">
<span className="material-symbols-outlined text-on-error-container text-[18px] mt-0.5">conveyor_belt</span>
<div>
<p className="font-body-sm text-body-sm font-bold text-on-error-container">Zone B Loading Dock</p>
<p className="font-body-sm text-[11px] text-on-error-container/80 mt-xs leading-tight">40% delay detected due to unusual LTL volume. Re-routing recommended.</p>
<button className="mt-sm font-label-caps text-[10px] uppercase text-error border border-error/30 px-2 py-1 rounded bg-surface-container-lowest hover:bg-error/10 transition-colors">Run AI Solver</button>
</div>
</div>
</div>

<div className="bg-surface-container rounded-lg p-sm border border-outline-variant/50">
<div className="flex items-start gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">group_work</span>
<div>
<p className="font-body-sm text-body-sm font-bold text-on-surface">Packing Station 3</p>
<p className="font-body-sm text-[11px] text-on-surface-variant mt-xs leading-tight">Staffing deficit detected for upcoming 14:00 spike.</p>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>

    </div>
  );
}