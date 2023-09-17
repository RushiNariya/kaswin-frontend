import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const token = 'fgdfgdf';
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
