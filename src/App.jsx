import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import VerificationPage from './pages/VerificationPage';

const App = () => {
	const [currentView, setCurrentView] = useState('landing');
	const [userType, setUserType] = useState(null);

	return (
		<>
			{currentView === 'landing' && (
				<LandingPage
					setCurrentView={setCurrentView}
					setUserType={setUserType}
				/>
			)}
			{currentView === 'dashboard' && (
				<Dashboard
					setCurrentView={setCurrentView}
					userType={userType}
				/>
			)}
			{currentView === 'verify' && (
				<VerificationPage
					setCurrentView={setCurrentView}
					userType={userType}
				/>
			)}
		</>
	);
};

export default App;
