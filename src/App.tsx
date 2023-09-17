import './assets/css/App.css';

import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/*" element={<AdminLayout />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
