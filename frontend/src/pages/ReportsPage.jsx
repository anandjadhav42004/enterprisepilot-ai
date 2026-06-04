import React from 'react';
import { Link } from 'react-router-dom';

export default function ReportsPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      

<header className="flex justify-between items-center w-full h-14 px-margin sticky top-0 z-30 bg-surface/80 backdrop-blur-md shadow-sm">
<div className="flex items-center gap-md">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface md:hidden">EnterprisePilot AI</span>
<div className="hidden md:flex items-center bg-surface-container px-3 py-1.5 rounded-full border border-outline-variant/30">
<span className="material-symbols-outlined text-on-surface-variant" style={{"fontSize":"18px"}}>search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm text-on-surface w-48 placeholder-on-surface-variant/70" placeholder="Search reports..." type="text" />
</div>
</div>
<div className="flex items-center gap-xs">
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Dark Mode">
<span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors relative" title="Notifications">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors ml-sm" title="Account">
<span className="material-symbols-outlined" data-icon="account_circle" style={{"fontSize":"28px"}}>account_circle</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-md md:p-margin">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Reports Hub</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Generate and manage operational intelligence.</p>
</div>
<div className="flex items-center gap-2">
<button className="h-[36px] px-4 bg-surface-container-lowest border border-outline-variant rounded-lg text-on-surface font-body-sm text-body-sm flex items-center gap-2 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>calendar_today</span>
                        This Month
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col hover:border-secondary transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>inventory_2</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Inventory Summary</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Comprehensive overview of stock levels, valuations, and turnover rates.</p>
<button className="w-full h-[36px] bg-surface-container border border-outline-variant rounded-lg text-on-surface font-body-sm text-body-sm flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-on-secondary group-hover:border-secondary transition-all" onClick="openProgressModal('Inventory Summary')">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>bolt</span>
                        Generate
                    </button>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col relative overflow-hidden group border-l-4 border-l-tertiary-fixed-dim">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div className="flex items-center gap-1 text-tertiary-fixed-dim bg-tertiary-container/10 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined" style={{"fontSize":"12px","fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
                            AI Predicted
                        </div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Low Stock Report</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Predictive analysis of items nearing depletion based on current velocity.</p>
<button className="w-full h-[36px] bg-secondary text-on-secondary rounded-lg font-body-sm text-body-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" onClick="openProgressModal('Low Stock AI Forecast')">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>auto_awesome</span>
                        Generate Forecast
                    </button>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col hover:border-secondary transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>sprint</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Sprint Report</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Team velocity, issue burndown, and bottleneck identification.</p>
<button className="w-full h-[36px] bg-surface-container border border-outline-variant rounded-lg text-on-surface font-body-sm text-body-sm flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-on-secondary group-hover:border-secondary transition-all" onClick="openProgressModal('Sprint Report')">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>bolt</span>
                        Generate
                    </button>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col hover:border-secondary transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-lg bg-primary-container/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>precision_manufacturing</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Warehouse Efficiency</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">Metrics on picking times, routing optimization, and spatial usage.</p>
<button className="w-full h-[36px] bg-surface-container border border-outline-variant rounded-lg text-on-surface font-body-sm text-body-sm flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-on-secondary group-hover:border-secondary transition-all" onClick="openProgressModal('Warehouse Efficiency')">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>bolt</span>
                        Generate
                    </button>
</div>
</div>

<div className="mb-4 flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">Generation History</h3>
<div className="flex gap-2">
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined" style={{"fontSize":"20px"}}>filter_list</span></button>
<button className="p-1.5 text-on-surface-variant hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined" style={{"fontSize":"20px"}}>more_vert</span></button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant">Report Name</th>
<th className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant">Type</th>
<th className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant">Generated By</th>
<th className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant">Date &amp; Time</th>
<th className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant">Status</th>
<th className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-surface-variant">

<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-4 py-3 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-outline" style={{"fontSize":"16px"}}>description</span>
                                Q3 Inventory Audit
                            </td>
<td className="px-4 py-3 text-on-surface-variant">Inventory Summary</td>
<td className="px-4 py-3 text-on-surface-variant">System (Schedule)</td>
<td className="px-4 py-3 font-data-mono text-data-mono text-on-surface-variant">Oct 24, 08:00 AM</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                                    Completed
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded" title="Download PDF"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>picture_as_pdf</span></button>
<button className="p-1 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded" title="Download Excel"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>table_view</span></button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-4 py-3 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed-dim" style={{"fontSize":"16px","fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
                                Weekly Low Stock Alert
                            </td>
<td className="px-4 py-3 text-on-surface-variant">Low Stock Report</td>
<td className="px-4 py-3 text-on-surface-variant">Alex Mercer</td>
<td className="px-4 py-3 font-data-mono text-data-mono text-on-surface-variant">Oct 23, 14:30 PM</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                                    Completed
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded" title="Download PDF"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>picture_as_pdf</span></button>
<button className="p-1 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded" title="Download Excel"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>table_view</span></button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-4 py-3 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-outline" style={{"fontSize":"16px"}}>pending</span>
                                Oct Efficiency Analysis
                            </td>
<td className="px-4 py-3 text-on-surface-variant">Warehouse Efficiency</td>
<td className="px-4 py-3 text-on-surface-variant">Sarah Jenkins</td>
<td className="px-4 py-3 font-data-mono text-data-mono text-on-surface-variant">Just now</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/10 text-secondary font-label-caps text-[10px]">
<span className="material-symbols-outlined animate-spin" style={{"fontSize":"12px"}}>sync</span>
                                    In Progress
                                </span>
</td>
<td className="px-4 py-3 text-right">
<span className="text-on-surface-variant text-xs italic">Processing...</span>
</td>
</tr>

<tr className="hover:bg-surface-bright transition-colors group">
<td className="px-4 py-3 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-outline" style={{"fontSize":"16px"}}>description</span>
                                Sprint 42 Review
                            </td>
<td className="px-4 py-3 text-on-surface-variant">Sprint Report</td>
<td className="px-4 py-3 text-on-surface-variant">System (Schedule)</td>
<td className="px-4 py-3 font-data-mono text-data-mono text-on-surface-variant">Oct 20, 17:00 PM</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-on-tertiary-container font-label-caps text-[10px]">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                                    Completed
                                </span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded" title="Download PDF"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>picture_as_pdf</span></button>
<button className="p-1 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded" title="Download Excel"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>table_view</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

    </div>
  );
}