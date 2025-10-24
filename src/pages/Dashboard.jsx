import React from 'react';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import RecentVerifications from '../components/RecentVerifications';
import { FileCheck, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

const Dashboard = ({ setCurrentView, userType }) => {
	const dashboardStats = {
		totalVerifications: 1247,
		verifiedCertificates: 1089,
		rejectedCertificates: 158,
		pendingVerifications: 23,
		successRate: 87.3
	};

	const statsData = [
		{
			title: 'Total Verifications',
			value: dashboardStats.totalVerifications,
			change: '+12.5%',
			icon: FileCheck,
			color: 'blue'
		},
		{
			title: 'Verified Certificates',
			value: dashboardStats.verifiedCertificates,
			change: '+8.2%',
			icon: CheckCircle,
			color: 'green'
		},
		{
			title: 'Rejected Certificates',
			value: dashboardStats.rejectedCertificates,
			change: '-3.1%',
			icon: XCircle,
			color: 'red'
		},
		{
			title: 'Success Rate',
			value: `${dashboardStats.successRate}%`,
			change: dashboardStats.pendingVerifications.toString(),
			icon: TrendingUp,
			color: 'yellow'
		}
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<Sidebar
				currentPage="dashboard"
				setCurrentView={setCurrentView}
				userType={userType}
			/>

			<div className="ml-64 p-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
					<p className="text-gray-500">Monitor certificate verification analytics and recent activities</p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{statsData.map((stat, index) => (
						<StatsCard key={index} {...stat} />
					))}
				</div>

				{/* Charts and Tables */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					<div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
						<h3 className="text-lg font-semibold text-gray-800 mb-4">Verification Trends</h3>
						<div className="h-64 flex items-center justify-center text-gray-400">
							<div className="text-center">
								<TrendingUp className="w-16 h-16 mx-auto mb-2 text-indigo-300" />
								<p>Chart visualization would go here</p>
								<p className="text-sm">Showing monthly verification trends</p>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl shadow-sm text-white">
						<h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
						<p className="text-indigo-100 text-sm mb-6">Streamline your workflow</p>
						<div className="space-y-3">
							<button
								onClick={() => setCurrentView('verify')}
								className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
							>
								Verify New Certificate
							</button>
							<button className="w-full bg-indigo-400 text-white py-3 rounded-lg font-semibold hover:bg-indigo-300 transition">
								Upload Certificates
							</button>
							<button className="w-full bg-indigo-400 text-white py-3 rounded-lg font-semibold hover:bg-indigo-300 transition">
								Generate Report
							</button>
						</div>
					</div>
				</div>

				<RecentVerifications />
			</div>
		</div>
	);
};

export default Dashboard;

