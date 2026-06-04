import React from 'react';
import { Link } from 'react-router-dom';

export default function AICopilotPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      

<div className="w-72 bg-surface border-r border-outline-variant flex flex-col hidden md:flex">
<div className="p-4 border-b border-outline-variant">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Recent Chats</h2>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<button className="w-full text-left p-3 rounded-lg bg-surface-container-high transition-colors">
<div className="font-body-sm text-body-sm text-on-surface-variant mb-1">Today</div>
<div className="font-body-md text-body-md text-on-surface font-medium truncate">Q3 Supply Chain Analysis</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-surface-container transition-colors">
<div className="font-body-sm text-body-sm text-on-surface-variant mb-1">Yesterday</div>
<div className="font-body-md text-body-md text-on-surface font-medium truncate">Vendor Contract Review</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-surface-container transition-colors">
<div className="font-body-sm text-body-sm text-on-surface-variant mb-1">Oct 12</div>
<div className="font-body-md text-body-md text-on-surface font-medium truncate">Identify Low Stock Items</div>
</button>
</div>
</div>

<div className="flex-1 flex flex-col bg-surface-bright relative">

<div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">

<div className="self-end max-w-[80%] lg:max-w-[70%] bg-primary-container text-on-primary-container rounded-xl rounded-tr-sm p-4 shadow-sm">
<p className="font-body-md text-body-md text-white">Can you analyze our current inventory levels and highlight any items that are critically low based on upcoming scheduled workflows?</p>
</div>

<div className="self-start max-w-[80%] lg:max-w-[70%] bg-surface-container-lowest border border-outline-variant border-l-4 border-l-[#10B981] rounded-xl rounded-tl-sm p-4 shadow-sm flex gap-3">
<div className="mt-1">
<span className="material-symbols-outlined text-[#10B981] text-[20px]">temp_preferences_custom</span>
</div>
<div className="flex-1">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Inventory Analysis Complete</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">I've cross-referenced current stock levels with the upcoming production workflows for the next 14 days. I found 3 items requiring immediate attention.</p>
<div className="border border-outline-variant rounded-lg overflow-hidden mb-3">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low border-b border-outline-variant">
<tr>
<th className="p-2 font-medium">SKU</th>
<th className="p-2 font-medium">Item</th>
<th className="p-2 font-medium">Deficit</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="p-2 font-data-mono text-data-mono text-on-surface-variant">PRT-092</td>
<td className="p-2">Actuator Valve</td>
<td className="p-2 text-error font-medium">-150 units</td>
</tr>
<tr>
<td className="p-2 font-data-mono text-data-mono text-on-surface-variant">CHM-441</td>
<td className="p-2">Industrial Solvent</td>
<td className="p-2 text-error font-medium">-20 Liters</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="self-start max-w-[80%] bg-surface-container-lowest border border-outline-variant rounded-xl rounded-tl-sm p-4 shadow-sm flex items-center h-[52px]">
<div className="ml-4 dot-typing"></div>
</div>
</div>

<div className="absolute inset-0 bg-primary-container/40 backdrop-blur-sm z-10 flex items-center justify-center hidden" id="ai-modal">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg p-6 w-80 text-center">
<span className="material-symbols-outlined text-secondary text-[32px] mb-3 animate-spin">autorenew</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Applying AI Action</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Generating purchase orders for low stock items...</p>
</div>
</div>

<div className="p-4 bg-surface-bright border-t border-outline-variant">

<div className="flex gap-2 mb-3 overflow-x-auto pb-2 no-scrollbar">
<button className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-full font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors">
                            Draft purchase orders
                        </button>
<button className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-full font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors">
                            Summarize delayed tasks
                        </button>
<button className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-full font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors">
                            Show supplier contacts
                        </button>
</div>
<div className="relative bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm flex items-end p-2 focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent transition-all">
<textarea className="flex-1 max-h-32 min-h-[44px] bg-transparent border-none resize-none font-body-md text-body-md focus:ring-0 py-2 px-2" placeholder="Ask Copilot a question or request an action..." rows="1"></textarea>
<div className="flex items-center gap-1 pb-1">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-md transition-colors" title="Attach file">
<span className="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<button className="p-2 bg-secondary text-on-secondary rounded-md hover:bg-secondary-container transition-colors" onClick="document.getElementById('ai-modal').classList.toggle('hidden')" title="Send message">
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
<div className="text-center mt-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">AI-generated content may be inaccurate. Verify important information.</span>
</div>
</div>
</div>

<div className="w-80 bg-surface border-l border-outline-variant flex flex-col hidden lg:flex">
<div className="p-4 border-b border-outline-variant flex justify-between items-center">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Copilot Context</h2>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">info</span>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-secondary text-[18px]">database</span>
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Data Sources</h3>
</div>
<ul className="space-y-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> ERP Inventory DB</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Workflow Scheduler</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-surface-variant"></span> Vendor API (Cached)</li>
</ul>
</div>

<div className="bg-surface-container-lowest border border-outline-variant border-l-4 border-l-secondary rounded-lg p-4">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-[18px]">lightbulb</span>
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Suggested Action</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface mb-3">
                            Based on the deficit, generating a bulk purchase order for PRT-092 and CHM-441 now can prevent a workflow stoppage next Thursday.
                        </p>
<button className="w-full border border-secondary text-secondary font-body-sm text-body-sm font-medium py-1.5 rounded-md hover:bg-secondary/10 transition-colors">
                            Draft PO
                        </button>
</div>
</div>
</div>

    </div>
  );
}