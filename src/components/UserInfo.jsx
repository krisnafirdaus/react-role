import { useAuth } from '../context/AuthContext';

export const UserInfo = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>Not authenticated</div>;
  }

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 1000
    }}>
      <strong>Current User:</strong><br />
      Username: {user?.username}<br />
      Role: {user?.role}<br />
      Email: {user?.email}
    </div>
  );
};
