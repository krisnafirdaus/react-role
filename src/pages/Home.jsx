import { useAuth } from '../context/AuthContext';

export const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to the Application</h1>
      
      <div className="welcome-content">
        <div className="welcome-message">
          <h2>Hello, {user?.username}!</h2>
          <p>You are logged in as a <strong>{user?.role}</strong>.</p>
        </div>
        
        <div className="user-stats">
          <div className="stat-card">
            <h3>Your Profile</h3>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
            <p>Status: Active</p>
          </div>
        </div>
        
        <div className="recent-actions">
          <h2>Recent Actions</h2>
          <ul>
            <li>Profile updated</li>
            <li>Password changed</li>
            <li>Email verified</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
