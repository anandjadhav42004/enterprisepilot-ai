import React from 'react';
import { Link } from 'react-router-dom';

export default function PurchaseRequestsPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      

<header className="flex justify-between items-center w-full h-14 px-margin sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">

<button className="md:hidden p-2 -ml-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>

<div className="relative hidden sm:block w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{"fontSize":"18px"}}>search</span>
<input className="w-full h-9 pl-9 pr-3 rounded-full bg-surface-container-lowest border border-outline-variant text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="Search workflows..." type="text" />
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container transition-colors active:opacity-80">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container transition-colors active:opacity-80 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container transition-colors active:opacity-80">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>

<div className="p-margin flex-1 flex flex-col gap-lg max-w-7xl w-full mx-auto">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-surface">Purchase Requests</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage and approve procurement workflows.</p>
</div>
<button className="h-[36px] px-4 bg-secondary text-on-secondary rounded-lg font-body-sm text-body-sm font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all shrink-0 active:scale-95">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>add</span>
                        Create Request
                    </button>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col overflow-hidden">

<div className="p-md border-b border-outline-variant bg-surface-bright flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
<div className="flex items-center gap-3 w-full sm:w-auto">
<span className="material-symbols-outlined text-on-surface-variant" style={{"fontSize":"20px"}}>filter_list</span>

<div className="relative group">
<select className="h-[36px] pl-3 pr-8 rounded-lg border border-outline-variant bg-surface-container-lowest font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/50 hover:bg-surface-container-low cursor-pointer w-full sm:w-auto">
<option value="all">Urgency: All</option>
<option value="normal">Normal</option>
<option value="urgent">Urgent</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" style={{"fontSize":"16px"}}>expand_more</span>
</div>

<div className="relative group">
<select className="h-[36px] pl-3 pr-8 rounded-lg border border-outline-variant bg-surface-container-lowest font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/50 hover:bg-surface-container-low cursor-pointer w-full sm:w-auto">
<option value="all">Status: All</option>
<option value="pending">Pending</option>
<option value="approved">Approved</option>
<option value="rejected">Rejected</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" style={{"fontSize":"16px"}}>expand_more</span>
</div>
</div>

<div className="hidden sm:flex items-center gap-2 text-on-tertiary-container bg-[#009668]/10 px-3 py-1.5 rounded-full font-label-caps text-label-caps">
<span className="material-symbols-outlined" style={{"fontSize":"14px"}}>auto_awesome</span>
<span>2 requests auto-flagged for review</span>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-lowest">
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold">Request ID</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold">Item Name</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold">Quantity</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold">Vendor</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold">Urgency</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold">Status</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/50" id="requests-table-body">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-4 font-data-mono text-data-mono text-secondary">REQ-1042</td>
<td className="py-3 px-4 font-body-sm text-body-sm font-medium text-on-surface">MacBook Pro M3 Max</td>
<td className="py-3 px-4 font-body-sm text-body-sm text-on-surface-variant">3</td>
<td className="py-3 px-4 font-body-sm text-body-sm text-on-surface-variant">Apple Enterprise</td>
<td className="py-3 px-4">
<div className="inline-flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">horizontal_rule</span>
<span className="font-body-sm text-body-sm">Normal</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps border border-outline-variant/30">
                                            Pending
                                        </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-[#009668]/10 text-on-tertiary-container hover:bg-[#009668]/20 transition-colors" onClick="openModal('REQ-1042', 'approve')" title="Approve">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>check</span>
</button>
<button className="p-1.5 rounded bg-error-container text-on-error-container hover:bg-error-container/80 transition-colors" onClick="openModal('REQ-1042', 'reject')" title="Reject">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>close</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group border-l-2 border-l-error">
<td className="py-3 px-4 font-data-mono text-data-mono text-secondary pl-3">REQ-1041</td>
<td className="py-3 px-4 font-body-sm text-body-sm font-medium text-on-surface">AWS Server Capacity Upgrade</td>
<td className="py-3 px-4 font-body-sm text-body-sm text-on-surface-variant">1</td>
<td className="py-3 px-4 font-body-sm text-body-sm text-on-surface-variant">Amazon Web Services</td>
<td className="py-3 px-4">
<div className="inline-flex items-center gap-1 text-error font-medium">
<span className="material-symbols-outlined text-[14px] fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
<span className="font-body-sm text-body-sm">Urgent</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps border border-outline-variant/30">
                                            Pending
                                        </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded bg-[#009668]/10 text-on-tertiary-container hover:bg-[#009668]/20 transition-colors" onClick="openModal('REQ-1041', 'approve')" title="Approve">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>check</span>
</button>
<button className="p-1.5 rounded bg-error-container text-on-error-container hover:bg-error-container/80 transition-colors" onClick="openModal('REQ-1041', 'reject')" title="Reject">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>close</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-4 font-data-mono text-data-mono text-secondary">REQ-1038</td>
<td className="py-3 px-4 font-body-sm text-body-sm font-medium text-on-surface">Figma Enterprise Licenses</td>
<td className="py-3 px-4 font-body-sm text-body-sm text-on-surface-variant">15</td>
<td className="py-3 px-4 font-body-sm text-body-sm text-on-surface-variant">Figma Inc.</td>
<td className="py-3 px-4">
<div className="inline-flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">horizontal_rule</span>
<span className="font-body-sm text-body-sm">Normal</span>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#009668]/10 text-on-tertiary-container font-label-caps text-label-caps">
                                            Approved
                                        </span>
</td>
<td className="py-3 px-4 text-right">

<span className="material-symbols-outlined text-outline text-[18px] opacity-50 cursor-not-allowed">more_horiz</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-3 border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div>Showing 1 to 3 of 45 entries</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-surface-container disabled:opacity-50" disabled=""><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>chevron_left</span></button>
<button className="w-7 h-7 rounded bg-secondary text-on-secondary flex items-center justify-center font-medium">1</button>
<button className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center">2</button>
<button className="w-7 h-7 rounded hover:bg-surface-container flex items-center justify-center">3</button>
<button className="p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined" style={{"fontSize":"18px"}}>chevron_right</span></button>
</div>
</div>
</div>
</div>

    </div>
  );
}