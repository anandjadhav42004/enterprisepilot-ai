import React from 'react';

export default function CAPModelPage() {
  const cdsCode = `namespace epilot.warehouse;

entity Warehouses {
  key ID     : String;
  name       : String;
  location   : String;
  capacity   : Integer;
  items      : Association to many InventoryItems on items.warehouse = $self;
}

entity InventoryItems {
  key ID     : String;
  name       : String;
  stock      : Integer;
  minStock   : Integer;
  warehouse  : Association to Warehouses;
}

entity PurchaseRequests {
  key ID     : UUID;
  item       : Association to InventoryItems;
  quantity   : Integer;
  urgency    : String enum { LOW; MEDIUM; HIGH; CRITICAL };
  status     : String enum { PENDING; APPROVED; REJECTED } default 'PENDING';
  aiSuggested: Boolean default false;
}

entity AIActionLogs {
  key ID     : UUID;
  action     : String;
  entityName : String;
  timestamp  : DateTime;
  userRole   : String;
  riskLevel  : String;
}

service WarehouseService {
  @readonly entity Warehouses as projection on epilot.warehouse.Warehouses;
  @readonly entity InventoryItems as projection on epilot.warehouse.InventoryItems;
  
  entity PurchaseRequests as projection on epilot.warehouse.PurchaseRequests;
  entity AIActionLogs as projection on epilot.warehouse.AIActionLogs;
  
  action approvePurchaseRequest(request_ID: UUID, comment: String);
  action generateInventoryRiskReport() returns String;
}`;

  return (
    <div className="flex-1 p-md md:p-lg lg:p-xl space-y-lg max-w-[1400px] mx-auto w-full h-full overflow-y-auto">
      <div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">SAP CAP Model (CDS)</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Core Data Services definition for the EnterprisePilot backend.</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
        <div className="flex-1 p-0 bg-[#1e1e1e]">
          <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
            <span className="material-symbols-outlined text-[#cccccc] mr-2" style={{fontSize: '18px'}}>description</span>
            <span className="font-data-mono text-sm text-[#cccccc]">schema.cds</span>
          </div>
          <div className="p-4 overflow-x-auto">
            <pre className="font-data-mono text-sm text-[#d4d4d4] leading-relaxed">
              <code>{cdsCode}</code>
            </pre>
          </div>
        </div>
        
        <div className="w-full lg:w-80 bg-surface border-l border-outline-variant p-md">
          <h3 className="font-headline-sm font-semibold text-on-surface mb-4">CAP Actions Overview</h3>
          
          <div className="space-y-4">
            <div className="p-3 border border-outline-variant/50 rounded bg-surface-container-lowest hover:border-secondary transition-colors">
              <h4 className="font-data-mono text-sm font-bold text-secondary mb-1">approvePurchaseRequest()</h4>
              <p className="text-xs text-on-surface-variant">Custom action to handle multi-level approvals, adjusting inventory forecasts immediately.</p>
            </div>
            <div className="p-3 border border-outline-variant/50 rounded bg-surface-container-lowest hover:border-secondary transition-colors ai-border">
              <h4 className="font-data-mono text-sm font-bold text-[#009668] mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined ai-sparkle" style={{fontSize: '14px'}}>auto_awesome</span>
                generateInventoryRiskReport()
              </h4>
              <p className="text-xs text-on-surface-variant">Triggers AI-based analysis on stock levels, returning a JSON summary of at-risk items.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
