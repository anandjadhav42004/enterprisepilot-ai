import React from 'react';
import StatusBadge from '../components/StatusBadge';

export default function ODataServicesPage() {
  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      <div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">OData V4 Services</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Explore exposed SAP CAP endpoints and entity sets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {/* Service Explorer */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex items-center justify-between mb-md">
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Service Catalog</h3>
            <span className="font-data-mono text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">/odata/v4/</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-on-surface text-lg">WarehouseService</h4>
                <StatusBadge label="Active" status="success" />
              </div>
              <p className="text-sm text-on-surface-variant mb-3">Handles all warehouse operations, picking routes, and inventory levels.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-data-mono bg-surface-container px-2 py-1 rounded">/InventoryItems</span>
                <span className="text-xs font-data-mono bg-surface-container px-2 py-1 rounded">/Warehouses</span>
              </div>
            </div>

            <div className="p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-on-surface text-lg">PurchaseRequestService</h4>
                <StatusBadge label="Active" status="success" />
              </div>
              <p className="text-sm text-on-surface-variant mb-3">Manages automated and manual purchase requisition workflows.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-data-mono bg-surface-container px-2 py-1 rounded">/PurchaseRequests</span>
                <span className="text-xs font-data-mono bg-surface-container px-2 py-1 rounded">/approvePurchaseRequest</span>
              </div>
            </div>

            <div className="p-4 border border-outline-variant/30 rounded-lg hover:border-secondary transition-colors ai-border">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-on-surface text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined ai-sparkle" style={{fontSize: '18px'}}>auto_awesome</span>
                  AuditLogService
                </h4>
                <StatusBadge label="Active" status="success" />
              </div>
              <p className="text-sm text-on-surface-variant mb-3">Tracks AI decisions and automated actions for compliance.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-data-mono bg-surface-container px-2 py-1 rounded">/AIActionLogs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Endpoint Tester (Mock) */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col">
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-secondary" style={{fontSize: '24px'}}>terminal</span>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Sample Endpoints</h3>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="bg-[#1e1e1e] text-[#d4d4d4] rounded-lg p-4 font-data-mono text-sm overflow-x-auto shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#569cd6] font-bold">GET</span>
                <span className="text-[#ce9178]">/odata/v4/warehouse/InventoryItems?$top=2&amp;$filter=stock lt minStock</span>
              </div>
              <pre className="text-xs">
{`{
  "@odata.context": "$metadata#InventoryItems",
  "value": [
    {
      "ID": "INV-204",
      "name": "Industrial Processor Unit",
      "stock": 14,
      "minStock": 20,
      "warehouse_ID": "WH-B"
    },
    ...
  ]
}`}
              </pre>
            </div>

            <div className="bg-[#1e1e1e] text-[#d4d4d4] rounded-lg p-4 font-data-mono text-sm overflow-x-auto shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#4ec9b0] font-bold">POST</span>
                <span className="text-[#ce9178]">/odata/v4/warehouse/PurchaseRequests</span>
              </div>
              <pre className="text-xs">
{`{
  "item_ID": "INV-204",
  "quantity": 50,
  "urgency": "HIGH",
  "aiSuggested": true
}`}
              </pre>
            </div>
            
            <div className="bg-[#1e1e1e] text-[#d4d4d4] rounded-lg p-4 font-data-mono text-sm overflow-x-auto shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#4ec9b0] font-bold">POST</span>
                <span className="text-[#ce9178]">/odata/v4/warehouse/approvePurchaseRequest</span>
              </div>
              <pre className="text-xs">
{`{
  "request_ID": "PR-8842",
  "comment": "Approved by InventoryManager via AI Copilot recommendation"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
