import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const NavLink = ({ to, icon, label }) => {
    const isActive = currentPath === to;
    const baseClasses = "flex items-center gap-md px-sm py-2 rounded-DEFAULT font-bold transition-colors duration-150 transform hover:scale-[0.98]";
    const activeClasses = "text-secondary dark:text-secondary-fixed border-r-2 border-secondary dark:border-secondary-fixed bg-surface-container-high dark:bg-primary-container";
    const inactiveClasses = "text-on-surface-variant dark:text-outline hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-primary-container border-r-2 border-transparent";
    
    return (
      <Link className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`} to={to}>
        <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{icon}</span>
        <span className="font-body-md text-body-md">{label}</span>
      </Link>
    );
  };

  return (
    <nav aria-label="Sidebar" className="hidden md:flex bg-surface dark:bg-inverse-surface h-screen sticky left-0 top-0 border-r border-outline-variant dark:border-outline flex-col py-md w-64 z-40 shrink-0">

      <div className="px-lg pb-lg mb-sm">
        <div className="flex items-center gap-sm">
          <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined" style={{"fontSize":"20px"}}>api</span>
          </div>
          <div>
            <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface tracking-tight">EnterprisePilot</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">SAP CAP Showcase</p>
          </div>
        </div>
      </div>

      <div className="px-lg mb-lg">
        <button className="w-full bg-primary text-on-primary font-body-md text-body-md h-[36px] rounded-lg flex items-center justify-center gap-sm hover:bg-on-surface-variant transition-colors">
          <span className="material-symbols-outlined" style={{"fontSize":"18px"}}>rocket_launch</span>
          Deploy to BTP
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-md space-y-xs">
        <div className="px-sm py-2 mt-2">
          <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">Business Ops</p>
        </div>
        <NavLink to="/dashboard" icon="dashboard" label="Dashboard" />
        <NavLink to="/inventory" icon="inventory_2" label="Inventory" />
        <NavLink to="/warehouse" icon="warehouse" label="Warehouse" />
        <NavLink to="/ai-copilot" icon="smart_toy" label="AI Copilot" />
        
        <div className="px-sm py-2 mt-4">
          <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">SAP Architecture</p>
        </div>
        <NavLink to="/sap-btp" icon="cloud" label="SAP BTP" />
        <NavLink to="/odata-services" icon="sync_alt" label="OData Services" />
        <NavLink to="/cap-model" icon="account_tree" label="CAP Model" />
        <NavLink to="/architecture" icon="architecture" label="Architecture" />
        <NavLink to="/roles" icon="admin_panel_settings" label="Roles & Auth" />
        <NavLink to="/audit-logs" icon="history" label="Audit Logs" />
      </div>

      <div className="mt-auto px-md space-y-xs pt-lg border-t border-outline-variant/30">
        <NavLink to="/settings" icon="settings" label="Settings" />
      </div>
    </nav>
  );
}