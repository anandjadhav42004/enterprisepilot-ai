import React from 'react';
import { Link } from 'react-router-dom';

export default function SettingsPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      
<div className="max-w-5xl mx-auto space-y-lg">

<div>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Settings</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Manage your account preferences and system configurations.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-md">

<div className="space-y-md lg:col-span-1">

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col items-center text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-surface-container to-primary-fixed opacity-50"></div>
<img alt="User Avatar" className="w-20 h-20 rounded-full border-2 border-surface-container-lowest shadow-sm z-10 mt-sm" data-alt="A professional headshot of a female executive with a confident smile. She is wearing a dark navy blazer over a white blouse. The lighting is bright and clean, typical of corporate photography. The background is slightly blurred but appears to be a modern office setting, contributing to the professional, light-mode design system aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxHh12MWEL_aMxiNyyPuAAH7MAVrLei8vZFmP0P5fYZzAWq_wI7KoD9JZL89YnbmyFOgflh6ukAzVV-1cstLpslFqKLqHIHqV7-ZZGB5ylGoX4u49kWJUFHmk1ii0snLYXyUddcz9qxBhTANP85oabPccUOh5Iv66GX4ul9-ImSqDmJkDCj5WBGNk2tF07lFQ4LebC5by2hopdcTDynvA7nV7CsoPQgEpf1f60Ee2ak8wFsM2Xq3ow8GovE_QjfMeY5Tng393peRk" />
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-sm z-10">Sarah Jenkins</h3>
<p className="font-body-sm text-body-sm text-secondary font-medium z-10">Operations Director</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs z-10">sarah.jenkins@enterprisepilot.io</p>
<button className="mt-md px-md py-sm border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors w-full z-10">Edit Profile</button>
</section>

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
<div className="flex items-center justify-between mb-sm">
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">System Connections</h3>
<span className="material-symbols-outlined text-on-surface-variant text-sm">cable</span>
</div>
<div className="space-y-sm mt-sm">
<div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant border-opacity-50">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined text-sm">database</span>
</div>
<div>
<p className="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">SAP ERP Core</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">OData v4</p>
</div>
</div>
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Connected</span>
</div>
</div>
<div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant border-opacity-50">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-sm">cloud</span>
</div>
<div>
<p className="font-body-sm text-body-sm font-semibold text-on-surface leading-tight">AWS S3</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">Data Lake</p>
</div>
</div>
<div className="flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Offline</span>
</div>
</div>
</div>
<button className="mt-sm font-body-sm text-body-sm text-secondary hover:underline w-full text-left">Configure integrations →</button>
</section>
</div>

<div className="space-y-md lg:col-span-2">

<section className="bg-surface-container-lowest border border-outline-variant border-l-4 border-l-[#10B981] rounded-xl p-md">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-[#10B981]">auto_awesome</span>
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">AI Automation Engine</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Configure autopilot behaviors for your operational workflows.</p>
<div className="space-y-sm">

<div className="flex items-center justify-between py-sm border-b border-outline-variant border-opacity-30">
<div>
<p className="font-body-md text-body-md font-medium text-on-surface">Auto-reorder Stock</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Trigger POs when inventory falls below AI-predicted threshold.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-secondary bg-secondary" id="toggle1" name="toggle1" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-secondary cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>

<div className="flex items-center justify-between py-sm border-b border-outline-variant border-opacity-30">
<div>
<p className="font-body-md text-body-md font-medium text-on-surface">Auto-task Creation</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Extract action items from team emails and add to workflow.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-outline-variant" id="toggle2" name="toggle2" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>

<div className="flex items-center justify-between py-sm">
<div>
<p className="font-body-md text-body-md font-medium text-on-surface">Scheduled AI Reporting</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Generate weekly predictive analytics summaries.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-secondary bg-secondary" id="toggle3" name="toggle3" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-secondary cursor-pointer" htmlFor="toggle3"></label>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
<div className="p-md border-b border-outline-variant bg-surface-bright">
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Role Permissions</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Manage access levels across the organization.</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant bg-surface-container-lowest">
<th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold pl-md">Capability</th>
<th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold text-center">Admin</th>
<th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold text-center">Manager</th>
<th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold text-center">Staff</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface">
<tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
<td className="p-sm pl-md">View Dashboards</td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
<td className="p-sm pl-md">Execute Workflows</td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
<td className="p-sm pl-md">Manage Integrations</td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container opacity-50 cursor-not-allowed" disabled="" type="checkbox" /></td>
</tr>
<tr className="hover:bg-surface-bright transition-colors">
<td className="p-sm pl-md">Billing &amp; Subscriptions</td>
<td className="p-sm text-center"><input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" /></td>
<td className="p-sm text-center"><input className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container opacity-50 cursor-not-allowed" disabled="" type="checkbox" /></td>
<td className="p-sm text-center"><input className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container opacity-50 cursor-not-allowed" disabled="" type="checkbox" /></td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
<h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-sm">Notification Channels</h3>
<div className="flex flex-wrap gap-sm">
<label className="flex items-center gap-xs p-xs border border-outline-variant rounded bg-surface-bright cursor-pointer hover:bg-surface-container-low">
<input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Email Summaries</span>
</label>
<label className="flex items-center gap-xs p-xs border border-outline-variant rounded bg-surface-bright cursor-pointer hover:bg-surface-container-low">
<input checked="" className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">In-App Alerts</span>
</label>
<label className="flex items-center gap-xs p-xs border border-outline-variant rounded bg-surface-bright cursor-pointer hover:bg-surface-container-low">
<input className="rounded text-secondary focus:ring-secondary border-outline-variant bg-surface-container" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">SMS (Critical Only)</span>
</label>
</div>
</section>
<div className="flex justify-end gap-sm mt-lg">
<button className="px-lg py-sm border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low transition-colors h-[36px]">Cancel</button>
<button className="px-lg py-sm bg-secondary text-on-primary rounded-lg font-body-sm text-body-sm hover:opacity-90 transition-opacity h-[36px]">Save Changes</button>
</div>
</div>
</div>
</div>

    </div>
  );
}