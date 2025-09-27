import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">SavvyFinance</span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-md">
              Your trusted source for personal finance advice, investment strategies, and financial planning tools. 
              Empowering individuals to make smart financial decisions.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@savvyfinance.com" className="hover:text-emerald-400 transition-colors">
                hello@savvyfinance.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} SavvyFinance. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Educational content for informational purposes. Not financial advice. 
            Consult with qualified professionals for personalized guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
