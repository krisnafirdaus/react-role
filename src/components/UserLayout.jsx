import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './UserLayout.css';

export const UserLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="user-layout">
      <header className="user-header">
        <div className="user-nav">
          <h1>User Dashboard</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
          </nav>
        </div>
        <div className="user-info">
          <span>Hello, {user?.username}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>
      
      <main className="user-content">
        <Outlet />
      </main>
    </div>
  );
};
