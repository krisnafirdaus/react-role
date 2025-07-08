# React Role-Based Authentication System

Implementasi sistem autentikasi berbasis role dengan React Router yang menggunakan middleware pattern untuk mengontrol akses ke halaman admin dan user.

## Fitur Utama

### 🔐 Authentication Context
- Centralized authentication state management
- Persistent login dengan localStorage
- Role-based access control (RBAC)
- Loading states dan error handling

### 🛡️ Protected Routes & Middleware
- `ProtectedRoute`: Middleware untuk halaman yang memerlukan autentikasi
- `RoleProtectedRoute`: Middleware untuk halaman berdasarkan role
- `AdminRoute`: Middleware khusus untuk admin access
- `UserRoute`: Middleware khusus untuk user access

### 📱 Layout Components
- `AdminLayout`: Layout dengan navigation untuk admin panel
- `UserLayout`: Layout untuk user dashboard
- Responsive design dengan modern UI

### 🔧 Best Practices Implementation

#### 1. Context Pattern untuk State Management
```jsx
// AuthContext.jsx
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

#### 2. Higher-Order Component untuk Route Protection
```jsx
// ProtectedRoute.jsx
export const AdminRoute = ({ children }) => {
  return (
    <RoleProtectedRoute requiredRole="admin" fallbackPath="/unauthorized">
      {children}
    </RoleProtectedRoute>
  );
};
```

#### 3. Role Hierarchy System
```jsx
const roleHierarchy = {
  admin: ['admin', 'user'],
  user: ['user']
};
```

#### 4. Redirect dengan Return URL
```jsx
if (requireAuth && !isAuthenticated) {
  return <Navigate to="/login" state={{ from: location }} replace />;
}
```

## Struktur Project

```
src/
├── context/
│   └── AuthContext.jsx          # Authentication context
├── components/
│   ├── ProtectedRoute.jsx       # Route protection middleware
│   ├── AdminLayout.jsx          # Admin layout component
│   └── UserLayout.jsx           # User layout component
├── pages/
│   ├── Login.jsx                # Login page
│   ├── Home.jsx                 # User home page
│   ├── Profile.jsx              # User profile page
│   ├── Unauthorized.jsx         # 403 error page
│   ├── NotFound.jsx             # 404 error page
│   └── admin/
│       ├── AdminDashboard.jsx   # Admin dashboard
│       ├── AdminUsers.jsx       # User management
│       └── AdminSettings.jsx    # System settings
└── App.jsx                      # Main routing configuration
```

## Cara Menggunakan

### 1. Demo Accounts
- **Admin**: username: `admin`, password: `any`
- **User**: username: `user`, password: `any`

### 2. Routing Structure
```jsx
// Public routes
/login                    # Login page

// Protected user routes
/                        # Home page (requires authentication)
/profile                 # Profile page (requires authentication)

// Admin only routes
/admin                   # Admin dashboard (requires admin role)
/admin/users             # User management (requires admin role)
/admin/settings          # Settings (requires admin role)

// Error pages
/unauthorized            # 403 access denied
/*                       # 404 not found
```

### 3. Implementasi Middleware di Component

```jsx
// Untuk halaman yang memerlukan autentikasi
<Route path="/profile" element={
  <ProtectedRoute>
    <Profile />
  </ProtectedRoute>
} />

// Untuk halaman admin only
<Route path="/admin" element={
  <AdminRoute>
    <AdminDashboard />
  </AdminRoute>
} />

// Untuk halaman dengan role custom
<Route path="/manager" element={
  <RoleProtectedRoute requiredRole="manager" fallbackPath="/unauthorized">
    <ManagerDashboard />
  </RoleProtectedRoute>
} />
```

## Best Practices yang Diimplementasikan

### 1. **Security First**
- Never trust client-side role validation
- Always validate on server-side
- Use HTTPS in production
- Implement token expiration

### 2. **User Experience**
- Loading states during authentication checks
- Proper error handling and feedback
- Remember return URL after login
- Graceful fallbacks for unauthorized access

### 3. **Code Organization**
- Separation of concerns
- Reusable components
- Centralized state management
- Clean routing structure

### 4. **Scalability**
- Modular design
- Easy to add new roles
- Extensible middleware system
- Type-safe (can be extended with TypeScript)

### 5. **Performance**
- Lazy loading for routes
- Minimal re-renders
- Efficient state updates
- Persistent authentication state

## Pengembangan Lebih Lanjut

### 1. Integrasi dengan Backend
```jsx
// Ganti mock login dengan real API
const login = async (credentials) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  
  if (response.ok) {
    const { user, token } = await response.json();
    localStorage.setItem('token', token);
    setUser(user);
    return { success: true };
  }
  return { success: false, error: 'Login failed' };
};
```

### 2. JWT Token Management
```jsx
// Implementasi refresh token
const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  // Call refresh endpoint
};
```

### 3. More Granular Permissions
```jsx
// Permission-based access control
const hasPermission = (permission) => {
  return user?.permissions?.includes(permission);
};

// Usage
<RoleProtectedRoute requiredPermission="users.read">
  <UsersList />
</RoleProtectedRoute>
```

## Menjalankan Aplikasi

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Aplikasi akan berjalan di `http://localhost:5173`

## Kontribusi

Feel free to contribute dengan:
- Menambahkan fitur baru
- Memperbaiki bug
- Meningkatkan dokumentasi
- Menambahkan tests+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
