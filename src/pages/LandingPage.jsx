import React from 'react';
import { Shield, Upload, BarChart3 } from 'lucide-react';

const LandingPage = ({ setCurrentView, setUserType }) => {
	return (
		<div className="min-h-screen flex">
			{/* Left Section */}
			<div className="w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-16 flex flex-col justify-center text-white">
				<div className="mb-8">
					<div className="flex items-center gap-3 mb-2">
						<Shield className="w-12 h-12" />
						<span className="text-2xl font-bold">PRAGYATECH</span>
					</div>
					<p className="text-indigo-200 text-sm">Certificate Validator For Academia</p>
				</div>

				<h1 className="text-5xl font-bold mb-6 leading-tight">
					Empower Your Institution's <span className="text-yellow-300">Digital Credentials</span>
				</h1>

				<p className="text-xl mb-4 text-indigo-100">Verify with confidence</p>
				<p className="text-lg mb-12 text-indigo-200">your credentials, our integrity.</p>

				<div className="space-y-4">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
						<span className="text-lg">Advance Fraud Prevention Technology</span>
					</div>
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
						<span className="text-lg">Real-Time Quick Verification with analytics</span>
					</div>
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
						<span className="text-lg">Streamlined Certificate Management</span>
					</div>
				</div>
			</div>

			{/* Right Section */}
			<div className="w-1/2 bg-gray-50 p-16 flex items-center justify-center">
				<div className="bg-white rounded-2xl shadow-xl p-12 w-full max-w-md">
					<h2 className="text-3xl font-bold text-gray-800 mb-2">Institution Portal</h2>
					<p className="text-gray-500 mb-8">Secure access for educational organizations and certificate issuers</p>

					<div className="grid grid-cols-2 gap-4 mb-8">
						<div className="text-center p-6 bg-gray-50 rounded-lg">
							<Upload className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
							<p className="text-sm font-medium text-gray-700">Upload</p>
							<p className="text-xs text-gray-500">Certificates</p>
						</div>
						<div className="text-center p-6 bg-gray-50 rounded-lg">
							<BarChart3 className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
							<p className="text-sm font-medium text-gray-700">Analytics</p>
							<p className="text-xs text-gray-500">Dashboard</p>
						</div>
					</div>

					{/* Administrator Sign In Button */}
					<button
						onClick={() => {
							setUserType('admin');
							setCurrentView('login');
						}}
						className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold mb-4 hover:bg-indigo-700 transition"
					>
						Administrator Sign In
					</button>

					<p className="text-center text-gray-500 mb-4">Are you a student?</p>

					{/* Student Login Button */}
					<button
						onClick={() => {
							setUserType('student');
							setCurrentView('login');
						}}
						className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
					>
						Student Login
					</button>

					{/* Divider */}
					<div className="relative my-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">or</span>
						</div>
					</div>

					{/* Create Account Button */}
					<button
						onClick={() => setCurrentView('signup')}
						className="w-full bg-white border-2 border-indigo-600 text-indigo-600 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition"
					>
						Create New Account
					</button>

					<p className="text-xs text-gray-400 text-center mt-8">
						Secure institutional access with enterprise-grade security<br />
						Contact support for account setup assistance
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
