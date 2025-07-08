import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Generic Protected Route Component
export const ProtectedRoute = ({ children, requireAuth = true }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (requireAuth && !isAuthenticated) {
    // Redirect to login with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!requireAuth && isAuthenticated) {
    // Redirect authenticated users away from login/register pages
    return <Navigate to="/" replace />;
  }

  return children;
};

// Role-based Protected Route Component
export const RoleProtectedRoute = ({ children, requiredRole, fallbackPath = '/' }) => {
  const { isAuthenticated, hasRole, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!hasRole(requiredRole)) {
    // User is authenticated but doesn't have required role
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
};

// Admin Route Middleware
export const AdminRoute = ({ children }) => {
  return (
    <RoleProtectedRoute requiredRole="admin" fallbackPath="/unauthorized">
      {children}
    </RoleProtectedRoute>
  );
};

// User Route Middleware (for user-only routes)
export const UserRoute = ({ children }) => {
  return (
    <RoleProtectedRoute requiredRole="user" fallbackPath="/unauthorized">
      {children}
    </RoleProtectedRoute>
  );
};
