import React from 'react';
import { Shield, BarChart3, FileCheck, Upload, Users } from 'lucide-react';

const Sidebar = ({ currentPage, setCurrentView, userType }) => {
	return (
		<div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
			<div className="flex items-center gap-3 mb-8">
				<Shield className="w-8 h-8 text-indigo-600" />
				<div>
					<div className="font-bold text-lg">PRAGYATECH</div>
					<div className="text-xs text-gray-500">Certificate Verification</div>
				</div>
			</div>

			<nav className="space-y-2">
				<div className="text-xs font-semibold text-gray-400 mb-2">
					{userType === 'admin' ? 'ADMIN' : 'STUDENT'} PORTAL
				</div>

				{userType === 'admin' && (
					<button
						onClick={() => setCurrentView('dashboard')}
						className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${currentPage === 'dashboard'
								? 'bg-indigo-50 text-indigo-600'
								: 'text-gray-600 hover:bg-gray-50'
							}`}
					>
						<BarChart3 className="w-5 h-5" />
						<span>Dashboard</span>
					</button>
				)}

				<button
					onClick={() => setCurrentView('verify')}
					className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${currentPage === 'verify'
							? 'bg-indigo-50 text-indigo-600'
							: 'text-gray-600 hover:bg-gray-50'
						}`}
				>
					<FileCheck className="w-5 h-5" />
					<span>Verify Certificate</span>
				</button>

				{userType === 'admin' && (
					<button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
						<Upload className="w-5 h-5" />
						<span>Upload Certificates</span>
					</button>
				)}

				<div className="pt-4">
					<div className="text-xs font-semibold text-gray-400 mb-2">ACCOUNT</div>
					<button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
						<Users className="w-5 h-5" />
						<span>Settings</span>
					</button>
				</div>
			</nav>

			<div className="absolute bottom-6 left-6 right-6">
				<div className="flex items-center gap-3 p-3 bg-indigo-600 text-white rounded-lg">
					<div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">
						{userType === 'admin' ? 'A' : 'S'}
					</div>
					<div>
						<div className="font-semibold text-sm">
							{userType === 'admin' ? 'Admin' : 'Student'} User
						</div>
						<div className="text-xs text-indigo-200">
							{userType === 'admin' ? 'Administrator' : 'Student'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
