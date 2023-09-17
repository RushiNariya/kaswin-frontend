import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RestrictedAuth = ({ restricted = false }) => {
  const token = false;
  const location = useLocation();

  return token && restricted ? (
    <Navigate to={`/dashboard`} replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default RestrictedAuth;
