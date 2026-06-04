import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-14 px-margin sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">

<div className="flex md:hidden items-center gap-sm">
<button className="p-2 -ml-2 text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container rounded-full transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface tracking-tight">EnterprisePilot AI</span>
</div>

<div className="hidden md:flex items-center text-on-surface-variant font-body-sm text-body-sm gap-xs">
<a className="hover:text-on-surface transition-colors" href="#">Home</a>
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>chevron_right</span>
<span className="text-on-surface font-semibold">Dashboard</span>
</div>

<div className="flex items-center gap-sm">

<div className="hidden lg:flex items-center bg-surface-container-lowest border border-outline-variant rounded-full h-8 px-3 w-64 focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent transition-all">
<span className="material-symbols-outlined text-on-surface-variant mr-2" style={{"fontSize":"18px"}}>search</span>
<input className="bg-transparent border-none outline-none font-body-sm text-body-sm w-full text-on-surface placeholder:text-on-surface-variant/70" placeholder="Search resources..." type="text" />
</div>
<div className="flex items-center gap-xs ml-sm">
<button aria-label="Dark Mode" className="text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container p-2 rounded-full transition-all hover:opacity-80 relative">
<span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
<button aria-label="Notifications" className="text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container p-2 rounded-full transition-all hover:opacity-80 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
</button>
<button aria-label="Account" className="text-on-surface-variant hover:bg-surface-container dark:hover:bg-primary-container p-2 rounded-full transition-all hover:opacity-80 relative">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</header>
  );
}