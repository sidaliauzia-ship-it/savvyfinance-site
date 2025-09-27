import React from 'react';
import { Cookie, Settings, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const CookiePolicy = () => {
  const lastUpdated = "January 2025";

  const cookieTypes = [
    {
      type: "Essential Cookies",
      description: "Required for the website to function properly. Cannot be disabled.",
      examples: ["Session management", "Security features", "Load balancing"]
    },
    {
      type: "Analytics Cookies", 
      description: "Help us understand how visitors interact with our website.",
      examples: ["Google Analytics", "Page views", "User behavior tracking"]
    },
    {
      type: "Advertising Cookies",
      description: "Used to deliver relevant advertisements and measure ad effectiveness.",
      examples: ["Google AdSense", "Personalized ads", "Ad performance tracking"]
    },
    {
      type: "Performance Cookies",
      description: "Collect information about website performance and user experience.",
      examples: ["Page load times", "Error reporting", "Feature usage"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cookie className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: {lastUpdated}
          </p>
        </div>

        <Card className="bg-white border-slate-200 mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">What Are Cookies?</h2>
              <p className="text-slate-600 mb-6">
                Cookies are small text files that are stored on your computer or mobile device when you 
                visit a website. They help websites remember information about your visit, which can make 
                it easier to visit the site again and make the site more useful to you.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Cookies</h2>
              <p className="text-slate-600 mb-6">
                SavvyFinance uses cookies to enhance your browsing experience, analyze website traffic, 
                and serve relevant advertisements. We use both first-party cookies (set by our website) 
                and third-party cookies (set by external services like Google AdSense).
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Types of Cookies We Use</h2>
              
              <div className="grid gap-6 mb-8">
                {cookieTypes.map((cookie, index) => (
                  <Card key={index} className="border-slate-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-lg">
                        <Settings className="h-5 w-5 mr-2 text-emerald-600" />
                        {cookie.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-3">{cookie.description}</p>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-slate-700 mb-2">Examples:</p>
                        <ul className="text-sm text-slate-600">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Google AdSense Cookies</h2>
              <p className="text-slate-600 mb-6">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies 
                to serve ads that are relevant to you based on your browsing history. These cookies do not 
                contain personally identifiable information. You can opt out of personalized advertising 
                by visiting the <a href="https://www.google.com/settings/ads" className="text-emerald-600 hover:underline">
                Google Ad Settings</a> page.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-slate-600 mb-4">
                You can control and manage cookies in various ways:
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  Browser Settings
                </h3>
                <p className="text-blue-700 text-sm mb-3">
                  Most web browsers allow you to control cookies through their settings:
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>• Firefox: Options → Privacy & Security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Cookies</li>
                  <li>• Edge: Settings → Cookies and site permissions</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-slate-800 mb-3">Cookie Management Options</h3>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject all cookies (may affect website functionality)</li>
                <li>Accept only essential cookies</li>
                <li>Customize cookie preferences by category</li>
                <li>Delete existing cookies from your browser</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Cookie Services</h2>
              <p className="text-slate-600 mb-4">
                We work with the following third-party services that may set cookies:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li><strong>Google Analytics:</strong> Website traffic analysis and reporting</li>
                <li><strong>Google AdSense:</strong> Advertisement serving and optimization</li>
                <li><strong>Social Media Platforms:</strong> Social sharing functionality</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookie Data Retention</h2>
              <p className="text-slate-600 mb-6">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until they expire or you delete them</li>
                <li><strong>Third-party cookies:</strong> Controlled by the respective third-party service</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-slate-600 mb-6">
                While you can browse our website with cookies disabled, please note that doing so may 
                limit your access to certain features and functionality. Essential website functions 
                may not work properly without cookies.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-slate-600 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or applicable law. We will notify you of any material changes by posting the updated 
                policy on our website.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy;
