import React from 'react';
import { Upload, FileCheck, Shield } from 'lucide-react';

const VerificationForm = ({
	uploadedFile,
	selectedInstitution,
	setSelectedInstitution,
	handleFileUpload,
	handleVerification
}) => {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
			<div className="flex items-center gap-2 mb-6">
				<Shield className="w-6 h-6 text-indigo-600" />
				<h2 className="text-xl font-bold text-gray-800">Verify Certificate</h2>
			</div>

			<div className="grid grid-cols-2 gap-6 mb-6">
				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">Upload Certificate</label>
					<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition cursor-pointer">
						<input
							type="file"
							onChange={handleFileUpload}
							accept=".pdf,.jpg,.jpeg,.png,.tiff"
							className="hidden"
							id="fileUpload"
						/>
						<label htmlFor="fileUpload" className="cursor-pointer">
							<Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
							<p className="text-sm font-medium text-gray-700 mb-1">Click to upload or drag and drop</p>
							<p className="text-xs text-gray-500">PDF, JPEG, PNG, or TIFF (Max 10MB)</p>
						</label>
					</div>
					{uploadedFile && (
						<div className="mt-3 p-3 bg-indigo-50 rounded-lg flex items-center gap-2">
							<FileCheck className="w-5 h-5 text-indigo-600" />
							<span className="text-sm text-indigo-700 font-medium">{uploadedFile.name}</span>
						</div>
					)}
					<p className="text-xs text-gray-500 mt-2">
						Upload your certificate in scanned/image-based PDF or JPEG, PNG, or TIFF
					</p>
				</div>

				<div>
					<label className="block text-sm font-semibold text-gray-700 mb-2">Institution</label>
					<input
						type="text"
						placeholder="Search institutions..."
						className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
					/>
					<select
						value={selectedInstitution}
						onChange={(e) => setSelectedInstitution(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
					>
						<option value="">Select an institution...</option>
						<option value="MIT College">MIT College</option>
						<option value="Stanford University">Stanford University</option>
						<option value="Harvard University">Harvard University</option>
						<option value="Oxford University">Oxford University</option>
						<option value="Yale University">Yale University</option>
					</select>
					<p className="text-xs text-gray-500 mt-2">
						Select the issuing institution to improve accuracy
					</p>
				</div>
			</div>

			<button
				onClick={handleVerification}
				disabled={!uploadedFile}
				className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
			>
				Verify Certificate
			</button>
		</div>
	);
};

export default VerificationForm;
