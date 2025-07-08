import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute, AdminRoute } from './components/ProtectedRoute';
import { RoleBasedRedirect } from './components/RoleBasedRedirect';
import { UserInfo } from './components/UserInfo';
import { AdminLayout } from './components/AdminLayout';
import { UserLayout } from './components/UserLayout';

// Pages
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Unauthorized } from './pages/Unauthorized';
import { NotFound } from './pages/NotFound';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminSettings } from './pages/admin/AdminSettings';

import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <UserInfo />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={
            <ProtectedRoute requireAuth={false}>
              <Login />
            </ProtectedRoute>
          } />
          
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Root route - redirect based on role */}
          <Route path="/" element={<RoleBasedRedirect />} />
          
          {/* Protected User Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          
          {/* Admin Only Routes */}
          <Route path="/admin" element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
