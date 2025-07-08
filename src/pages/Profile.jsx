import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567'
  });

  const handleSave = () => {
    // Simulate saving profile
    console.log('Saving profile:', profileData);
    setEditing(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <div className="profile-info">
              <h2>{profileData.firstName} {profileData.lastName}</h2>
              <p className="profile-role">{user?.role}</p>
            </div>
          </div>
          
          <div className="profile-details">
            <div className="detail-group">
              <label>Username:</label>
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                disabled={!editing}
              />
            </div>
            
            <div className="detail-group">
              <label>Email:</label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                disabled={!editing}
              />
            </div>
            
            <div className="detail-group">
              <label>First Name:</label>
              <input
                type="text"
                value={profileData.firstName}
                onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                disabled={!editing}
              />
            </div>
            
            <div className="detail-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                disabled={!editing}
              />
            </div>
            
            <div className="detail-group">
              <label>Phone:</label>
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                disabled={!editing}
              />
            </div>
          </div>
          
          <div className="profile-actions">
            {editing ? (
              <>
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={() => setEditing(false)} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <button onClick={() => setEditing(true)} className="edit-btn">Edit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
