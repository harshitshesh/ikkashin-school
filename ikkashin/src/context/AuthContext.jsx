import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('sbps_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = (role, credentials) => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        let userData = null;
        if (role === 'admin') {
          userData = {
            id: 'ADM-001',
            name: 'School Administrator',
            email: credentials.email || 'admin@sbpsdoon.com',
            role: 'admin',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
          };
        } else if (role === 'student') {
          userData = {
            id: 'SBPS2025/1104',
            name: 'Aarav Sharma',
            email: credentials.email || 'aarav.sharma@student.sbpsdoon.com',
            role: 'student',
            class: 'Class 11th NDA Wing',
            avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200'
          };
        } else if (role === 'parent') {
          userData = {
            id: 'PAR-8840',
            name: 'Rajesh Sharma (Father of Aarav)',
            email: credentials.email || 'rajesh.sharma@example.com',
            role: 'parent',
            ward: 'Aarav Sharma (Class 11)',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
          };
        }

        if (userData) {
          setUser(userData);
          localStorage.setItem('sbps_user', JSON.stringify(userData));
        }
        setIsLoading(false);
        resolve(userData);
      }, 600);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sbps_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
