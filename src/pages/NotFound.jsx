import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        
        <div className="error-actions">
          <Link to="/" className="btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};
