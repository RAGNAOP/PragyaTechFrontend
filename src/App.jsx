import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import VerificationPage from './pages/VerificationPage';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing auth token on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUserType = localStorage.getItem('userType');

    if (token) {
      setIsAuthenticated(true);
      setUserType(storedUserType);

      // Navigate to appropriate page based on user type
      if (storedUserType === 'admin') {
        setCurrentView('dashboard');
      } else {
        setCurrentView('verify');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userType');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUserType(null);
    setCurrentView('landing');
  };

  return (
    <>
      {currentView === 'landing' && (
        <LandingPage
          setCurrentView={setCurrentView}
          setUserType={setUserType}
        />
      )}
      {currentView === 'login' && (
        <LoginPage
          setCurrentView={setCurrentView}
          setUserType={setUserType}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      {currentView === 'signup' && (
        <SignupPage
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'dashboard' && isAuthenticated && (
        <Dashboard
          setCurrentView={setCurrentView}
          userType={userType}
          handleLogout={handleLogout}
        />
      )}
      {currentView === 'verify' && isAuthenticated && (
        <VerificationPage
          setCurrentView={setCurrentView}
          userType={userType}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default App;
