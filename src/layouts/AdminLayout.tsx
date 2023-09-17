import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import RequireAuth from '../components/RequireAuth';
import Sidebar from '../components/Sidebar/Sidebar';
import toggleContext from '../context';
import AIDiagnosis from '../pages/AIDiagnosis/AIDiagnosis';
import Dashboard from '../pages/Dashboard/Dashboard';
import Help from '../pages/Help/Help';
import Introspect from '../pages/Introspect/Introspect';
import NonPremiumIntrospect from '../pages/Introspect/NonPremiumIntrospect';
import NotFound from '../pages/NotFound/NotFound';
import Sensors from '../pages/Sensors/Sensors';
import Settings from '../pages/Settings/Settings';
import adminSidebarRoutes from '../routes/sidebar';

function AdminLayout() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      <toggleContext.Provider
        value={{
          isOpen,
          setIsOpen,
        }}
      >
        <Sidebar routes={adminSidebarRoutes} />
        <div className={isOpen ? 'sidecontainer' : 'sidecontainerclose'}>
          <Navbar />
          <div className="p-2">
            <Routes>
              <Route element={<RequireAuth />}>
                <Route path="/" element={<Navigate to={'/dashboard'} replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="sensors" element={<Sensors />} />
                <Route path="introspect" element={<Introspect />} />
                {/* <Route path="introspect" element={<NonPremiumIntrospect />} /> */}
                <Route path="setting" element={<Settings />} />
                <Route path="help" element={<Help />} />
                <Route path="AI-diagnosis" element={<AIDiagnosis />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </div>
        </div>
      </toggleContext.Provider>
    </>
  );
}

export default AdminLayout;
