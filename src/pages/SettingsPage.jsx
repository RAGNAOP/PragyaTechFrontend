import React from 'react';
import Sidebar  from '../components/Sidebar';
const SettingsPage = ({ setCurrentView, userType }) => {
	return (
		<div className="min-h-screen bg-gray-50">
			<Sidebar
				currentPage="settings"
				setCurrentView={setCurrentView}
				userType={userType}
			/>
			<button
				className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
			>
				LogOut
			</button>
		</div>
	);
}
export default SettingsPage;
