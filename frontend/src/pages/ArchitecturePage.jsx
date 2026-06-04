import React from 'react';

export default function ArchitecturePage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      <div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">System Architecture</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Data flow from React Frontend to SAP HANA Cloud.</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md lg:p-xl overflow-x-auto">
        <div className="min-w-[800px] flex flex-col items-center gap-8 py-8">
          
          {/* User/Frontend */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg z-10 relative">
                <span className="material-symbols-outlined" style={{fontSize: '32px'}}>devices</span>
              </div>
              <span className="mt-2 font-bold text-on-surface">React Vite UI</span>
              <span className="text-xs font-data-mono text-on-surface-variant">Fiori-inspired</span>
            </div>
          </div>

          <div className="w-1 h-8 bg-outline-variant border-l-2 border-dashed border-secondary"></div>

          {/* BTP Layer */}
          <div className="w-full max-w-4xl border-2 border-outline-variant rounded-xl p-6 relative bg-surface-container/10">
            <div className="absolute -top-3 left-6 bg-surface px-2 font-bold text-on-surface-variant uppercase text-sm tracking-wider">
              SAP Business Technology Platform
            </div>
            
            <div className="flex justify-around items-center">
              {/* App Router */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-xl bg-primary-container border-2 border-primary text-on-primary-container flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined" style={{fontSize: '40px'}}>router</span>
                </div>
                <span className="mt-2 font-bold text-on-surface">App Router</span>
                <span className="text-xs font-data-mono text-on-surface-variant">@sap/approuter</span>
              </div>

              <span className="material-symbols-outlined text-outline-variant" style={{fontSize: '32px'}}>arrow_forward</span>

              {/* XSUAA */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-xl bg-surface-container border-2 border-outline text-on-surface flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined" style={{fontSize: '40px'}}>shield_locked</span>
                </div>
                <span className="mt-2 font-bold text-on-surface">XSUAA</span>
                <span className="text-xs font-data-mono text-on-surface-variant">Auth & Roles</span>
              </div>

              <span className="material-symbols-outlined text-outline-variant" style={{fontSize: '32px'}}>arrow_forward</span>

              {/* CAP Service */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-20 h-20 rounded-xl bg-[#0058be] text-white flex items-center justify-center shadow-md border-2 border-[#004395]">
                  <span className="font-headline-lg font-bold">CAP</span>
                </div>
                <span className="absolute -right-4 -top-4 bg-[#10B981] text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{fontSize: '12px'}}>auto_awesome</span> AI
                </span>
                <span className="mt-2 font-bold text-on-surface">Node.js Service</span>
                <span className="text-xs font-data-mono text-on-surface-variant">OData V4</span>
              </div>
            </div>
          </div>

          <div className="w-1 h-8 bg-outline-variant border-l-2 border-dashed border-secondary"></div>

          {/* Database */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest border-4 border-outline text-on-surface flex items-center justify-center shadow-md z-10 relative">
                <span className="material-symbols-outlined" style={{fontSize: '32px'}}>database</span>
              </div>
              <span className="mt-2 font-bold text-on-surface">HANA Cloud</span>
              <span className="text-xs font-data-mono text-on-surface-variant">SQLite (Local)</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
