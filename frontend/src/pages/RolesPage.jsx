import React from 'react';
import StatusBadge from '../components/StatusBadge';

export default function RolesPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      <div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Role-Based Access Control</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">XSUAA Roles and CAP Authorization Matrix.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-lg">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary">admin_panel_settings</span>
            <h3 className="font-bold text-on-surface">Admin</h3>
          </div>
          <p className="text-sm text-on-surface-variant">Full system access, role assignment, and BTP configuration.</p>
        </div>
        
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary">inventory</span>
            <h3 className="font-bold text-on-surface">InventoryManager</h3>
          </div>
          <p className="text-sm text-on-surface-variant">Approve purchase requests, adjust stock targets, view AI forecasts.</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary">forklift</span>
            <h3 className="font-bold text-on-surface">WarehouseOperator</h3>
          </div>
          <p className="text-sm text-on-surface-variant">Read-only access to inventory, update task status, view routes.</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary">policy</span>
            <h3 className="font-bold text-on-surface">Auditor</h3>
          </div>
          <p className="text-sm text-on-surface-variant">Read-only access to all logs, AI decisions, and compliance data.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
        <div className="p-md border-b border-outline-variant bg-surface-container/20">
          <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">CAP Permission Matrix</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead className="bg-surface-container text-on-surface-variant">
              <tr>
                <th className="py-3 px-4 font-semibold">Entity / Action</th>
                <th className="py-3 px-4 font-semibold text-center">Admin</th>
                <th className="py-3 px-4 font-semibold text-center">InventoryManager</th>
                <th className="py-3 px-4 font-semibold text-center">WarehouseOperator</th>
                <th className="py-3 px-4 font-semibold text-center">Auditor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              <tr className="hover:bg-surface-container/30">
                <td className="py-3 px-4 font-data-mono">InventoryItems (READ)</td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
              </tr>
              <tr className="hover:bg-surface-container/30">
                <td className="py-3 px-4 font-data-mono">InventoryItems (WRITE)</td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
              </tr>
              <tr className="hover:bg-surface-container/30">
                <td className="py-3 px-4 font-data-mono">approvePurchaseRequest()</td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
              </tr>
              <tr className="hover:bg-surface-container/30">
                <td className="py-3 px-4 font-data-mono">AIActionLogs (READ)</td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
              </tr>
              <tr className="hover:bg-surface-container/30">
                <td className="py-3 px-4 font-data-mono">generateInventoryRiskReport()</td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Deny" status="danger" /></td>
                <td className="py-3 px-4 text-center"><StatusBadge label="Allow" status="success" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
