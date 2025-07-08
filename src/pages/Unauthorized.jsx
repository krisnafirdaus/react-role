import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Unauthorized = () => {
  const { user } = useAuth();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>403</h1>
        <h2>Access Denied</h2>
        <p>
          Sorry, you don't have permission to access this page.
          {user && (
            <span>
              <br />
              Current role: <strong>{user.role}</strong>
            </span>
          )}
        </p>
        
        <div className="error-actions">
          <Link to="/" className="btn-primary">Go to Home</Link>
          {user?.role === 'admin' && (
            <Link to="/admin" className="btn-secondary">Go to Admin Panel</Link>
          )}
        </div>
      </div>
    </div>
  );
};
