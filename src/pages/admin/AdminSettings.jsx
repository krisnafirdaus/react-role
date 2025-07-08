export const AdminSettings = () => {
  return (
    <div>
      <h1>System Settings</h1>
      
      <div className="settings-sections">
        <div className="settings-section">
          <h2>General Settings</h2>
          <div className="setting-item">
            <label>Site Name:</label>
            <input type="text" defaultValue="Admin Panel" />
          </div>
          <div className="setting-item">
            <label>Maintenance Mode:</label>
            <input type="checkbox" />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Security Settings</h2>
          <div className="setting-item">
            <label>Session Timeout (minutes):</label>
            <input type="number" defaultValue="30" />
          </div>
          <div className="setting-item">
            <label>Enable Two-Factor Authentication:</label>
            <input type="checkbox" />
          </div>
        </div>
        
        <div className="settings-section">
          <h2>Email Settings</h2>
          <div className="setting-item">
            <label>SMTP Server:</label>
            <input type="text" defaultValue="smtp.example.com" />
          </div>
          <div className="setting-item">
            <label>From Email:</label>
            <input type="email" defaultValue="admin@example.com" />
          </div>
        </div>
      </div>
      
      <button className="save-btn">Save Settings</button>
    </div>
  );
};
