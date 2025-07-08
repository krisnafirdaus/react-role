import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate checking authentication status on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulate API call or check localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate login API call
      const mockUser = {
        id: 1,
        username: credentials.username,
        role: credentials.username === 'admin' ? 'admin' : 'user',
        email: `${credentials.username}@example.com`
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, user: mockUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasRole = (requiredRole) => {
    if (!user) return false;
    
    // Define role hierarchy
    const roleHierarchy = {
      admin: ['admin', 'user'],
      user: ['user']
    };
    
    return roleHierarchy[user.role]?.includes(requiredRole) || false;
  };

  const value = {
    user,
    login,
    logout,
    hasRole,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
