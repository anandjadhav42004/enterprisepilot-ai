import React from 'react';
import StatusBadge from '../components/StatusBadge';

export default function AIAuditLogsPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined ai-sparkle" style={{fontSize: '32px'}}>history</span>
            AI Copilot Audit Logs
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Traceability matrix for AI-generated actions and OData interactions.</p>
        </div>
        <button className="h-[36px] px-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined" style={{fontSize: '18px'}}>download</span>
          Export CSV
        </button>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead className="bg-surface-container text-on-surface-variant">
              <tr>
                <th className="py-3 px-4 font-semibold">Timestamp</th>
                <th className="py-3 px-4 font-semibold">AI Prompt / Context</th>
                <th className="py-3 px-4 font-semibold">CAP Action / OData</th>
                <th className="py-3 px-4 font-semibold">Role</th>
                <th className="py-3 px-4 font-semibold">Risk Level</th>
                <th className="py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              <tr className="hover:bg-surface-container/30">
                <td className="py-4 px-4 font-data-mono text-xs text-on-surface-variant">2026-06-04 09:12:44</td>
                <td className="py-4 px-4">
                  <p className="font-medium text-on-surface">"Stock for INV-204 is dropping fast, what should I do?"</p>
                  <p className="text-xs text-on-surface-variant mt-1">Analyzed historical consumption.</p>
                </td>
                <td className="py-4 px-4">
                  <span className="font-data-mono text-xs bg-surface-container px-2 py-1 rounded block w-max">POST /PurchaseRequests</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs border border-outline-variant px-2 py-1 rounded">InventoryManager</span>
                </td>
                <td className="py-4 px-4"><StatusBadge label="LOW" status="success" /></td>
                <td className="py-4 px-4"><StatusBadge label="Executed" status="success" /></td>
              </tr>
              
              <tr className="hover:bg-surface-container/30">
                <td className="py-4 px-4 font-data-mono text-xs text-on-surface-variant">2026-06-04 08:45:10</td>
                <td className="py-4 px-4">
                  <p className="font-medium text-on-surface">"Approve all pending standard requests."</p>
                  <p className="text-xs text-on-surface-variant mt-1">Checked policy constraints.</p>
                </td>
                <td className="py-4 px-4">
                  <span className="font-data-mono text-xs bg-surface-container px-2 py-1 rounded block w-max">POST /approvePurchaseRequest</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs border border-outline-variant px-2 py-1 rounded">InventoryManager</span>
                </td>
                <td className="py-4 px-4"><StatusBadge label="MEDIUM" status="warning" /></td>
                <td className="py-4 px-4"><StatusBadge label="Executed" status="success" /></td>
              </tr>

              <tr className="hover:bg-surface-container/30">
                <td className="py-4 px-4 font-data-mono text-xs text-on-surface-variant">2026-06-04 07:30:00</td>
                <td className="py-4 px-4">
                  <p className="font-medium text-on-surface">System CRON: Daily Risk Check</p>
                  <p className="text-xs text-on-surface-variant mt-1">Automated scheduled run.</p>
                </td>
                <td className="py-4 px-4">
                  <span className="font-data-mono text-xs bg-surface-container px-2 py-1 rounded block w-max">GET /generateInventoryRiskReport</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs border border-outline-variant px-2 py-1 rounded">System (Admin)</span>
                </td>
                <td className="py-4 px-4"><StatusBadge label="HIGH" status="danger" /></td>
                <td className="py-4 px-4"><StatusBadge label="Logged" status="warning" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}