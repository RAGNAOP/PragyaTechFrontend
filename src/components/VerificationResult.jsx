import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const VerificationResult = ({ result, handleReset, setCurrentView, userType }) => {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
			<div className={`text-center mb-6 p-6 rounded-lg ${result.isValid ? 'bg-green-50' : 'bg-red-50'
				}`}>
				{result.isValid ? (
					<CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-3" />
				) : (
					<XCircle className="w-16 h-16 text-red-600 mx-auto mb-3" />
				)}
				<h2 className={`text-2xl font-bold mb-2 ${result.isValid ? 'text-green-800' : 'text-red-800'
					}`}>
					{result.isValid ? 'Certificate Verified' : 'Verification Failed'}
				</h2>
				<p className={result.isValid ? 'text-green-700' : 'text-red-700'}>
					{result.isValid
						? 'This certificate is authentic and has been verified'
						: 'This certificate could not be verified. It may be fraudulent or not in our system.'
					}
				</p>
			</div>

			{result.isValid && (
				<div className="space-y-4 mb-6">
					<div className="grid grid-cols-2 gap-4">
						<div className="p-4 bg-gray-50 rounded-lg">
							<p className="text-xs text-gray-500 mb-1">Institution</p>
							<p className="font-semibold text-gray-800">{result.institution}</p>
						</div>
						<div className="p-4 bg-gray-50 rounded-lg col-span-2">
							<p className="text-xs text-gray-500 mb-1">Degree/Certificate</p>
							<p className="font-semibold text-gray-800">{result.degree}</p>
						</div>
					</div>
				</div>
			)}

			<div className="flex gap-4">
				<button
					onClick={handleReset}
					className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
				>
					Verify Another Certificate
				</button>
				{userType === 'admin' && (
					<button
						onClick={() => setCurrentView('dashboard')}
						className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
					>
						Back to Dashboard
					</button>
				)}
			</div>
		</div>
	);
};

export default VerificationResult;
