import React from 'react';
import { Link } from 'react-router-dom';

export default function InventoryPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<nav className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-1">
<a className="hover:text-secondary transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-medium">Inventory</span>
</nav>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Inventory Management</h2>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded-lg border border-secondary text-secondary font-body-sm text-body-sm font-semibold hover:bg-secondary/10 transition-colors flex items-center gap-2 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-fixed-dim group-hover:w-full transition-all duration-300 -z-10 opacity-20"></div>
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">auto_awesome</span>
                            Ask AI about inventory
                        </button>
<button className="h-9 px-4 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                            Add Item
                        </button>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-3 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
<div className="w-full md:w-80 relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full h-9 pl-9 pr-3 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all" placeholder="Search by SKU, Name..." type="text" />
</div>
<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
<div className="flex items-center gap-2 border-r border-outline-variant pr-3 shrink-0">
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">filter_list</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Filters</span>
</div>
<select className="h-9 pl-3 pr-8 py-0 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-secondary shrink-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2345464D%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat">
<option>All Categories</option>
<option>Electronics</option>
<option>Apparel</option>
</select>
<select className="h-9 pl-3 pr-8 py-0 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-secondary shrink-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2345464D%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat">
<option>All Statuses</option>
<option>In Stock</option>
<option>Low Stock</option>
</select>
<select className="h-9 pl-3 pr-8 py-0 bg-surface border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-secondary shrink-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2345464D%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat">
<option>All Warehouses</option>
<option>NY-01</option>
<option>CA-02</option>
</select>
</div>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider">SKU</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider">Product Name</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider">Category</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider text-right">Quantity</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider text-right">Reorder Level</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider">Warehouse</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider">Status</th>
<th className="py-3 px-4 font-label-caps text-label-caps text-on-surface-variant font-semibold uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y divide-outline-variant" id="tableBody">

<tr className="hover:bg-surface transition-colors h-[48px]">
<td className="py-2 px-4"><div className="h-4 w-20 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-40 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-24 rounded skeleton-row"></div></td>
<td className="py-2 px-4 flex justify-end"><div className="h-4 w-12 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-12 rounded skeleton-row ml-auto"></div></td>
<td className="py-2 px-4"><div className="h-4 w-16 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-5 w-20 rounded-full skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-6 w-16 rounded skeleton-row ml-auto"></div></td>
</tr>
<tr className="hover:bg-surface transition-colors h-[48px]">
<td className="py-2 px-4"><div className="h-4 w-24 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-32 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-20 rounded skeleton-row"></div></td>
<td className="py-2 px-4 flex justify-end"><div className="h-4 w-10 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-12 rounded skeleton-row ml-auto"></div></td>
<td className="py-2 px-4"><div className="h-4 w-20 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-5 w-24 rounded-full skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-6 w-16 rounded skeleton-row ml-auto"></div></td>
</tr>
<tr className="hover:bg-surface transition-colors h-[48px]">
<td className="py-2 px-4"><div className="h-4 w-16 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-48 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-28 rounded skeleton-row"></div></td>
<td className="py-2 px-4 flex justify-end"><div className="h-4 w-14 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-12 rounded skeleton-row ml-auto"></div></td>
<td className="py-2 px-4"><div className="h-4 w-16 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-5 w-16 rounded-full skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-6 w-16 rounded skeleton-row ml-auto"></div></td>
</tr>
<tr className="hover:bg-surface transition-colors h-[48px]">
<td className="py-2 px-4"><div className="h-4 w-20 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-36 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-24 rounded skeleton-row"></div></td>
<td className="py-2 px-4 flex justify-end"><div className="h-4 w-8 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-12 rounded skeleton-row ml-auto"></div></td>
<td className="py-2 px-4"><div className="h-4 w-16 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-5 w-20 rounded-full skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-6 w-16 rounded skeleton-row ml-auto"></div></td>
</tr>
<tr className="hover:bg-surface transition-colors h-[48px]">
<td className="py-2 px-4"><div className="h-4 w-24 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-40 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-20 rounded skeleton-row"></div></td>
<td className="py-2 px-4 flex justify-end"><div className="h-4 w-12 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-4 w-12 rounded skeleton-row ml-auto"></div></td>
<td className="py-2 px-4"><div className="h-4 w-20 rounded skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-5 w-24 rounded-full skeleton-row"></div></td>
<td className="py-2 px-4"><div className="h-6 w-16 rounded skeleton-row ml-auto"></div></td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 border-t border-outline-variant bg-surface flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1 to 10 of 245 entries</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-outline hover:bg-surface-container-high transition-colors" disabled="">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded bg-primary-container text-on-primary-container font-body-sm text-body-sm font-medium">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium transition-colors">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-medium transition-colors">3</button>
<span className="text-outline mx-1">...</span>
<button className="p-1 rounded text-on-surface hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>

    </div>
  );
}