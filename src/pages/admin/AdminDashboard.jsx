import { useAuth } from '../../context/AuthContext';

export const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">150</p>
        </div>
        <div className="stat-card">
          <h3>Active Sessions</h3>
          <p className="stat-number">23</p>
        </div>
        <div className="stat-card">
          <h3>System Status</h3>
          <p className="stat-status">Online</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>User john_doe logged in</li>
          <li>New user registration: jane_smith</li>
          <li>System backup completed</li>
          <li>Database optimized</li>
        </ul>
      </div>
    </div>
  );
};
