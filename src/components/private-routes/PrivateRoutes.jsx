import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth.context';

function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading data...</div>;
  }

  return currentUser ? children : <Navigate to="/log-in" replace />;
}

export default PrivateRoute;