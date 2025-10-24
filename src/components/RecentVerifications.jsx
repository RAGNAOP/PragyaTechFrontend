import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const RecentVerifications = () => {
	const recentVerifications = [
		{ id: 1, student: 'John Doe', certificate: 'B.Tech Degree', status: 'verified', date: '2025-10-20', institution: 'MIT College' },
		{ id: 2, student: 'Jane Smith', certificate: 'MBA Diploma', status: 'verified', date: '2025-10-19', institution: 'Stanford University' },
		{ id: 3, student: 'Mike Johnson', certificate: 'PhD Certificate', status: 'rejected', date: '2025-10-18', institution: 'Oxford University' },
		{ id: 4, student: 'Sarah Williams', certificate: 'Master Degree', status: 'pending', date: '2025-10-17', institution: 'Harvard University' },
		{ id: 5, student: 'Tom Brown', certificate: 'Bachelor Degree', status: 'verified', date: '2025-10-16', institution: 'Yale University' }
	];

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
			<div className="p-6 border-b border-gray-100">
				<h3 className="text-lg font-semibold text-gray-800">Recent Verifications</h3>
				<p className="text-sm text-gray-500">Latest certificate verification requests</p>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Student</th>
							<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Certificate</th>
							<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Institution</th>
							<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
							<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100">
						{recentVerifications.map((item) => (
							<tr key={item.id} className="hover:bg-gray-50">
								<td className="px-6 py-4 text-sm font-medium text-gray-800">{item.student}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{item.certificate}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{item.institution}</td>
								<td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
								<td className="px-6 py-4">
									<span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${item.status === 'verified' ? 'bg-green-100 text-green-700' :
											item.status === 'rejected' ? 'bg-red-100 text-red-700' :
												'bg-yellow-100 text-yellow-700'
										}`}>
										{item.status === 'verified' ? <CheckCircle className="w-3 h-3" /> :
											item.status === 'rejected' ? <XCircle className="w-3 h-3" /> :
												<Clock className="w-3 h-3" />}
										{item.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RecentVerifications;
