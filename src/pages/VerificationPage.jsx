import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import VerificationForm from '../components/VerificationForm';
import VerificationResult from '../components/VerificationResult';
import { Shield } from 'lucide-react';

const VerificationPage = ({ setCurrentView, userType }) => {
	const [uploadedFile, setUploadedFile] = useState(null);
	const [verificationResult, setVerificationResult] = useState(null);
	const [selectedInstitution, setSelectedInstitution] = useState('');

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setUploadedFile(file);
		}
	};

	const handleVerification = () => {
		setTimeout(() => {
			const isValid = Math.random() > 0.3;
			setVerificationResult({
				isValid,
				certificateId: 'CERT-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
				issueDate: '2024-05-15',
				studentName: 'Sample Student',
				institution: selectedInstitution || 'Sample Institution',
				degree: 'Bachelor of Technology',
				verifiedDate: new Date().toISOString().split('T')[0]
			});
		}, 2000);
	};

	const handleReset = () => {
		setVerificationResult(null);
		setUploadedFile(null);
		setSelectedInstitution('');
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Sidebar
				currentPage="verify"
				setCurrentView={setCurrentView}
				userType={userType}
			/>

			<div className="ml-64 p-8">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-8">
						<Shield className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
						<h1 className="text-3xl font-bold text-gray-800 mb-2">PRAGYATECH Certificate Verification</h1>
						<p className="text-gray-500">Verify the authenticity of academic credentials instantly</p>
					</div>

					{!verificationResult ? (
						<VerificationForm
							uploadedFile={uploadedFile}
							selectedInstitution={selectedInstitution}
							setSelectedInstitution={setSelectedInstitution}
							handleFileUpload={handleFileUpload}
							handleVerification={handleVerification}
						/>
					) : (
						<VerificationResult
							result={verificationResult}
							handleReset={handleReset}
							setCurrentView={setCurrentView}
							userType={userType}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default VerificationPage;
