import React from 'react';
import KPICard from '../components/KPICard';
import StatusBadge from '../components/StatusBadge';

export default function SAPBTPPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      <div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">SAP BTP Cockpit</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Platform and infrastructure overview for EnterprisePilot.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        <KPICard title="Subaccount Status" value="Active" icon="cloud_done" trend="up" trendLabel="US East (VA)" />
        <KPICard title="Database Status" value="HANA Cloud" icon="database" trend="up" trendLabel="Running" />
        <KPICard title="Auth Service" value="XSUAA" icon="shield_person" trend="up" trendLabel="Healthy" />
        <KPICard title="App Router" value="Online" icon="router" trend="up" trendLabel="Routing Active" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-secondary" style={{fontSize: '24px'}}>api</span>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">BTP Destinations</h3>
          </div>
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead className="text-on-surface-variant border-b border-outline-variant">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Type</th>
                <th className="py-2">URL</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                <td className="py-3 font-semibold text-on-surface">EnterprisePilot_CAP_API</td>
                <td className="py-3">HTTP</td>
                <td className="py-3 font-data-mono text-xs">https://epilot-srv.cfapps.us10.hana.ondemand.com</td>
                <td className="py-3"><StatusBadge label="Connected" status="success" /></td>
              </tr>
              <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                <td className="py-3 font-semibold text-on-surface">SAP_S4HANA_Cloud</td>
                <td className="py-3">HTTP</td>
                <td className="py-3 font-data-mono text-xs">https://my300000-api.s4hana.ondemand.com</td>
                <td className="py-3"><StatusBadge label="Connected" status="success" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-secondary" style={{fontSize: '24px'}}>settings_applications</span>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Service Bindings</h3>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 border border-outline-variant/50 rounded-lg bg-surface-container/20">
              <div>
                <p className="font-bold text-on-surface">epilot-xsuaa</p>
                <p className="text-xs text-on-surface-variant font-data-mono">Authorization & Trust Management</p>
              </div>
              <StatusBadge label="Bound" status="success" />
            </div>
            <div className="flex justify-between items-center p-3 border border-outline-variant/50 rounded-lg bg-surface-container/20">
              <div>
                <p className="font-bold text-on-surface">epilot-db</p>
                <p className="text-xs text-on-surface-variant font-data-mono">SAP HANA Cloud (HDI Shared)</p>
              </div>
              <StatusBadge label="Bound" status="success" />
            </div>
            <div className="flex justify-between items-center p-3 border border-outline-variant/50 rounded-lg bg-surface-container/20">
              <div>
                <p className="font-bold text-on-surface">epilot-destination</p>
                <p className="text-xs text-on-surface-variant font-data-mono">Destination Service</p>
              </div>
              <StatusBadge label="Bound" status="success" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
