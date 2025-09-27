import React from 'react';
import { Shield, Eye, Database, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const PrivacyPolicy = () => {
  const lastUpdated = "January 2025";

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        <Card className="bg-white border-slate-200 mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
              <p className="text-slate-600 mb-6">
                At SavvyFinance ("we," "our," or "us"), we are committed to protecting your privacy and 
                personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website www.savvyfinance.net and use our services.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-slate-800 mb-3">Personal Information</h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>Contact us through our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Comment on our articles</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-800 mb-3">Automatically Collected Information</h3>
              <p className="text-slate-600 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages you visit and time spent</li>
                <li>Referring website information</li>
                <li>Device information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the collected information to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send newsletters and updates (with consent)</li>
                <li>Analyze website usage and performance</li>
                <li>Comply with legal obligations</li>
                <li>Display relevant advertisements through Google AdSense</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Google AdSense and Advertising</h2>
              <p className="text-slate-600 mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense may use 
                cookies and web beacons to serve ads based on your prior visits to our site and other sites 
                on the Internet. You may opt out of personalized advertising by visiting 
                <a href="https://www.google.com/settings/ads" className="text-emerald-600 hover:underline"> Google Ad Settings</a>.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Sharing and Disclosure</h2>
              <p className="text-slate-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-600 mb-6">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
              <p className="text-slate-600 mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li>Access, update, or delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Data Transfers</h2>
              <p className="text-slate-600 mb-6">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Children's Privacy</h2>
              <p className="text-slate-600 mb-6">
                Our services are not directed to children under 13. We do not knowingly collect personal 
                information from children under 13. If you believe a child has provided us with personal 
                information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
              <p className="text-slate-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
