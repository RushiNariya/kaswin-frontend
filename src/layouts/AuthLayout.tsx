import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import RestrictedAuth from '../components/RestrictedAuth';
import AuthWrapper from '../pages/auth/AuthWrapper';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VerifyOTP from '../pages/auth/VerifyOTP';

function AuthLayout() {
  return (
    <Routes>
      <Route element={<RestrictedAuth restricted={true} />}>
        <Route path="login" element={<AuthWrapper />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-otp" element={<VerifyOTP />} />
        <Route path="reset-password" element={<ResetPassword />} />

        <Route path="*" element={<Navigate to={`/auth/login`} replace />} />
      </Route>
    </Routes>
  );
}

export default AuthLayout;
