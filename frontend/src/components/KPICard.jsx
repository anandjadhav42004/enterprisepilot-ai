import React from 'react';

export default function KPICard({ title, value, icon, trend, trendLabel, type = "default" }) {
  const isError = type === "error";
  const bgClass = isError ? "bg-error-container/10 border-error/30" : "bg-surface-container-lowest border-outline-variant";
  const textClass = isError ? "text-on-error-container" : "text-on-surface-variant";
  const valClass = isError ? "text-on-error-container" : "text-on-surface";
  
  return (
    <div className={`border rounded-lg p-md flex flex-col justify-between ${bgClass}`}>
      <div className="flex items-center justify-between mb-sm">
        <span className={`font-label-caps text-label-caps uppercase ${textClass}`}>{title}</span>
        {icon && <span className={`material-symbols-outlined ${isError ? 'text-on-error-container' : 'text-outline'}`} style={{fontSize: '18px'}}>{icon}</span>}
      </div>
      <div>
        <span className={`font-data-mono text-data-mono text-2xl ${valClass}`}>{value}</span>
        {trend && (
          <div className={`flex items-center gap-1 mt-1 ${isError ? 'text-on-error-container' : 'text-[#009668]'}`}>
            {trend === 'up' && <span className="material-symbols-outlined" style={{fontSize: '14px'}}>trending_up</span>}
            {trend === 'down' && <span className="material-symbols-outlined" style={{fontSize: '14px'}}>trending_down</span>}
            {trend === 'warning' && <span className="material-symbols-outlined" style={{fontSize: '14px'}}>warning</span>}
            <span className="font-body-sm text-body-sm text-[10px] font-medium">{trendLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}
