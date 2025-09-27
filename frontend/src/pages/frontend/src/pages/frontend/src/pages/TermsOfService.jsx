import React from 'react';
import { FileText, Scale, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const TermsOfService = () => {
  const lastUpdated = "January 2025";

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        <Card className="bg-white border-slate-200 mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Agreement to Terms</h2>
              <p className="text-slate-600 mb-6">
                By accessing and using SavvyFinance (the "Service") operated by SavvyFinance ("us," "we," or "our"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Use License</h2>
              <p className="text-slate-600 mb-4">
                Permission is granted to temporarily access and use SavvyFinance for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Financial Disclaimer</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Important Financial Disclaimer</h3>
                    <p className="text-red-700 text-sm">
                      The information provided on SavvyFinance is for educational and informational purposes only. 
                      It is not intended as personalized financial, investment, tax, or legal advice. 
                      You should consult with qualified professionals before making any financial decisions.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Investment Risks</h2>
              <p className="text-slate-600 mb-6">
                All investments involve risk, including the potential loss of principal. Past performance 
                does not guarantee future results. Market conditions can change rapidly, and investment 
                strategies that have been successful in the past may not be successful in the future.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">User Responsibilities</h2>
              <p className="text-slate-600 mb-4">As a user of SavvyFinance, you agree to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>Use the service in compliance with applicable laws and regulations</li>
                <li>Not transmit any harmful, offensive, or illegal content</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Provide accurate information when required</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Content and Intellectual Property</h2>
              <p className="text-slate-600 mb-6">
                All content on SavvyFinance, including but not limited to text, graphics, logos, images, 
                and software, is the property of SavvyFinance or its content suppliers and is protected 
                by copyright and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Privacy</h2>
              <p className="text-slate-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the Service, to understand our practices.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Advertising</h2>
              <p className="text-slate-600 mb-6">
                SavvyFinance may display advertisements, including Google AdSense ads, to support the 
                operation of our website. We are not responsible for the content of third-party advertisements.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
              <p className="text-slate-600 mb-6">
                In no event shall SavvyFinance or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use SavvyFinance, even if SavvyFinance or a 
                SavvyFinance authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Accuracy of Materials</h2>
              <p className="text-slate-600 mb-6">
                The materials appearing on SavvyFinance could include technical, typographical, or 
                photographic errors. SavvyFinance does not warrant that any of the materials on its 
                website are accurate, complete, or current.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Links to Third-Party Sites</h2>
              <p className="text-slate-600 mb-6">
                SavvyFinance may contain links to third-party websites or services. We are not responsible 
                for the content, privacy policies, or practices of these external sites.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Modifications</h2>
              <p className="text-slate-600 mb-6">
                SavvyFinance may revise these terms of service at any time without notice. By using this 
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Governing Law</h2>
              <p className="text-slate-600 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws of 
                the United States and you irrevocably submit to the exclusive jurisdiction of the courts 
                in that state or location.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
              <p className="text-slate-600">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: <a href="mailto:hello@savvyfinance.com" className="text-emerald-600 hover:underline">hello@savvyfinance.com</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
