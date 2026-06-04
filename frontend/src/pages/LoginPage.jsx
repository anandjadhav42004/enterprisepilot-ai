import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      

<div className="w-full lg:w-1/2 xl:w-[45%] flex flex-col justify-center px-margin lg:px-16 xl:px-24 bg-surface-container-lowest z-10 relative">

<div className="loader-overlay absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center" id="loadingOverlay">
<div className="w-48 text-center space-y-md">
<span className="material-symbols-outlined text-secondary text-4xl animate-pulse">memory</span>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">Authenticating &amp; Loading Workspace...</p>
<div className="loader-bar"></div>
</div>
</div>
<div className="w-full max-w-md mx-auto">

<div className="mb-lg">
<div className="flex items-center gap-sm mb-xs">
<div className="h-8 w-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>rocket_launch</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">EnterprisePilot</h1>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">AI-First Enterprise Operations.</p>
</div>

<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
<form className="space-y-md" id="loginForm" onsubmit="event.preventDefault(); simulateLogin();">

<div className="space-y-sm">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Select Role Context</label>
<div className="flex p-1 bg-surface-container-low rounded-lg border border-outline-variant">
<label className="flex-1 text-center cursor-pointer">
<input checked="" className="peer sr-only" name="role" type="radio" value="admin" />
<div className="font-body-sm text-body-sm py-2 px-3 rounded-md transition-all peer-checked:bg-surface-container-lowest peer-checked:shadow-sm peer-checked:text-secondary peer-checked:font-semibold text-on-surface-variant hover:text-on-surface">
                                        Admin
                                    </div>
</label>
<label className="flex-1 text-center cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="manager" />
<div className="font-body-sm text-body-sm py-2 px-3 rounded-md transition-all peer-checked:bg-surface-container-lowest peer-checked:shadow-sm peer-checked:text-secondary peer-checked:font-semibold text-on-surface-variant hover:text-on-surface">
                                        Manager
                                    </div>
</label>
<label className="flex-1 text-center cursor-pointer">
<input className="peer sr-only" name="role" type="radio" value="staff" />
<div className="font-body-sm text-body-sm py-2 px-3 rounded-md transition-all peer-checked:bg-surface-container-lowest peer-checked:shadow-sm peer-checked:text-secondary peer-checked:font-semibold text-on-surface-variant hover:text-on-surface">
                                        Staff
                                    </div>
</label>
</div>
</div>

<div className="space-y-xs">
<label className="font-body-sm text-body-sm text-on-surface font-medium block" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">mail</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-surface-container-lowest transition-colors h-[36px]" id="email" name="email" required="" type="email" value="admin@enterprisepilot.ai" />
</div>
</div>

<div className="space-y-xs">
<div className="flex justify-between items-center">
<label className="font-body-sm text-body-sm text-on-surface font-medium block" htmlFor="password">Password</label>
<a className="font-body-sm text-body-sm text-secondary hover:underline" href="#">Forgot password?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">lock</span>
</div>
<input className="block w-full pl-10 pr-10 py-2 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-surface-container-lowest transition-colors h-[36px]" id="password" name="password" required="" type="password" value="password123" />
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface" onClick="togglePassword()" type="button">
<span className="material-symbols-outlined text-[18px]" id="visibilityIcon">visibility</span>
</button>
</div>
</div>

<div className="flex items-start gap-sm p-sm bg-surface rounded-lg border-l-4 border-l-[#10B981] text-on-surface-variant">
<span className="material-symbols-outlined text-[#10B981] text-[16px] mt-0.5">auto_awesome</span>
<p className="font-body-sm text-body-sm leading-relaxed">
                                AI context is primed. System will adapt UI density based on selected role upon login.
                            </p>
</div>

<button className="w-full flex justify-center items-center gap-sm bg-primary-container text-on-primary-container h-[36px] rounded-lg font-body-sm text-body-sm font-semibold hover:bg-primary-container/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-container transition-all shadow-sm" type="submit">
                            Sign In to Workspace
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
</div>

<div className="mt-lg text-center">
<p className="font-data-mono text-data-mono text-on-surface-variant bg-surface-container-low inline-block px-3 py-1.5 rounded border border-outline-variant">
                        Demo: admin@enterprisepilot.ai / password123
                    </p>
</div>

<div className="mt-xl flex justify-center gap-md font-body-sm text-body-sm text-on-surface-variant">
<a className="hover:text-on-surface" href="#">Privacy Policy</a>
<span>•</span>
<a className="hover:text-on-surface" href="#">Terms of Service</a>
<span>•</span>
<a className="hover:text-on-surface" href="#">Contact Support</a>
</div>
</div>
</div>

<div className="hidden lg:block lg:w-1/2 xl:w-[55%] relative bg-surface overflow-hidden border-l border-outline-variant">

<div className="absolute inset-0 bg-gradient-to-br from-surface-container via-surface to-primary-fixed opacity-30"></div>

<div className="absolute inset-0 flex flex-col justify-center items-center p-xl">
<div className="w-full h-full max-h-[800px] rounded-2xl overflow-hidden relative shadow-sm border border-outline-variant/50 group">

<img alt="Abstract Data Visualization" className="w-full h-full object-cover opacity-90 mix-blend-multiply filter grayscale-[20%] contrast-125 transition-transform duration-1000 group-hover:scale-105" data-alt="A sophisticated abstract visualization of data nodes connecting in a complex network across a minimalist, light-themed 3D space. The scene features glowing digital connections and geometric data packets flowing through transparent, glass-like conduits. The primary color palette relies on clean whites, soft grays, and deep navy blue accents, evoking a sense of high-end enterprise AI processing. The lighting is bright and evenly distributed, creating a professional, analytical mood suitable for a modern SaaS platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-EanrP3vRlNEvhjic6dxaA5_mcDx7P4jxbEOIwyM-2XpyNzqcLNYeHO-HQOHSv7bpicbR6QcZ0m_U9YavNKqt09smZkar5QihP9pdotmZ0sHMZJpChscZhlxcfejjqd6zQzQKYNJPvE8BuFi1jka9TQ4yqFjNubJZOJ6quTp7qMRoMs0aMYbNGfsQxtuhUfGlU1sDQsrPsdiuVsNJViC_5uD5BM-K1Wy92UmjoNi8t02AnaeZwuYj9SixK4_GLkIgnwb76NjLqUY-" />

<div className="absolute bottom-0 left-0 right-0 p-xl bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent">
<div className="max-w-md border-l-4 border-secondary pl-4">
<h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Orchestrate Complexity.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                                Unify your supply chain, workforce, and analytics under a single, intelligent pane of glass.
                            </p>
</div>
</div>
</div>
</div>

<div className="absolute top-24 -left-12 w-64 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-lg p-md animate-[pulse_4s_ease-in-out_infinite]">
<div className="flex items-center gap-sm mb-2">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[16px]">bar_chart</span>
</div>
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant">System Efficiency</div>
<div className="font-data-mono text-data-mono text-on-surface font-semibold">+24.8%</div>
</div>
</div>
<div className="h-2 w-full bg-surface-container rounded-full overflow-hidden mt-sm">
<div className="h-full bg-[#10B981] w-[75%] rounded-full"></div>
</div>
</div>
<div className="absolute bottom-48 -right-8 w-72 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-lg p-md animate-[pulse_5s_ease-in-out_infinite_0.5s]">
<div className="flex gap-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">notifications_active</span>
<div>
<div className="font-body-sm text-body-sm text-on-surface font-medium">Anomaly Detected</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Warehouse B throughput below baseline. AI agent dispatched.</div>
</div>
</div>
</div>
</div>

    </div>
  );
}