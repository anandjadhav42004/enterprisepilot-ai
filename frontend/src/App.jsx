import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import WarehouseOperationsPage from './pages/WarehouseOperationsPage';
import AICopilotPage from './pages/AICopilotPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPage from './pages/ReportsPage';
import PurchaseRequestsPage from './pages/PurchaseRequestsPage';
import AIAuditLogsPage from './pages/AIAuditLogsPage';
import SettingsPage from './pages/SettingsPage';

// New SAP Showcase Pages
import SAPBTPPage from './pages/SAPBTPPage';
import ODataServicesPage from './pages/ODataServicesPage';
import CAPModelPage from './pages/CAPModelPage';
import ArchitecturePage from './pages/ArchitecturePage';
import RolesPage from './pages/RolesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* SAP Showcase Routes */}
          <Route path="/sap-btp" element={<SAPBTPPage />} />
          <Route path="/odata-services" element={<ODataServicesPage />} />
          <Route path="/cap-model" element={<CAPModelPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/roles" element={<RolesPage />} />
          
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouse" element={<WarehouseOperationsPage />} />
          <Route path="/ai-copilot" element={<AICopilotPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/purchase-requests" element={<PurchaseRequestsPage />} />
          <Route path="/audit-logs" element={<AIAuditLogsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
