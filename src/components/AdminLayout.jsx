import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminLayout.css';

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-nav">
          <h1>Admin Panel</h1>
          <nav>
            <Link to="/admin" className="nav-link">Dashboard</Link>
            <Link to="/admin/users" className="nav-link">Users</Link>
            <Link to="/admin/settings" className="nav-link">Settings</Link>
          </nav>
        </div>
        <div className="admin-user-info">
          <span>Welcome, {user?.username} ({user?.role})</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>
      
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};
