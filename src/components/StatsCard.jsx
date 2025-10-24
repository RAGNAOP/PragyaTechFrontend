import React from 'react';

const StatsCard = ({ title, value, change, icon: Icon, color }) => {
	const colorClasses = {
		blue: 'bg-blue-50 text-blue-600',
		green: 'bg-green-50 text-green-600',
		red: 'bg-red-50 text-red-600',
		yellow: 'bg-yellow-50 text-yellow-600'
	};

	const changeColor = change.startsWith('+') ? 'text-green-600' :
		change.startsWith('-') ? 'text-red-600' : 'text-yellow-600';

	return (
		<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
			<div className="flex items-center justify-between mb-4">
				<div className={`p-3 rounded-lg ${colorClasses[color]}`}>
					<Icon className="w-6 h-6" />
				</div>
				<span className={`text-xs font-semibold ${changeColor}`}>
					{change}
				</span>
			</div>
			<h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
			<p className="text-sm text-gray-500">{title}</p>
		</div>
	);
};

export default StatsCard;

