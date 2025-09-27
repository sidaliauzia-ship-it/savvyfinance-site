import React from 'react';
import { TrendingUp, Target, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize financial education and empower individuals to make informed financial decisions that lead to lasting wealth and security."
    },
    {
      icon: BookOpen,
      title: "Educational Focus",
      description: "We believe that financial literacy is the foundation of financial success. Our content is designed to educate, not just inform."
    },
    {
      icon: Award,
      title: "Expert Content",
      description: "All our articles are researched and written by financial professionals with years of experience in the industry."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We're building a community of financially savvy individuals who support each other on their wealth-building journey."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            About SavvyFinance
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Your trusted partner in financial education, dedicated to helping individuals 
            and families build wealth through smart financial decisions and proven strategies.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card className="bg-white border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-4">
                  SavvyFinance was founded with a simple belief: everyone deserves access to quality 
                  financial education. In a world where financial literacy is more important than ever, 
                  we recognized the need for a reliable, trustworthy source of financial guidance.
                </p>
                <p className="text-slate-600 mb-4">
                  Our platform focuses on providing practical, actionable financial advice that real 
                  people can use to improve their financial situations. From budgeting basics to 
                  advanced investment strategies, we cover the full spectrum of personal finance topics.
                </p>
                <p className="text-slate-600">
                  We're committed to making financial education accessible to everyone, regardless of 
                  their current financial situation or level of experience. Our goal is to help you 
                  build the knowledge and confidence needed to achieve your financial goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Focus */}
        <div className="mb-16">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                What You'll Find on SavvyFinance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Personal Finance</h3>
                  <p className="text-slate-600 text-sm">
                    Budgeting, saving strategies, debt management, and financial planning fundamentals.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Investment Guidance</h3>
                  <p className="text-slate-600 text-sm">
                    Stock market insights, portfolio diversification, and long-term wealth building strategies.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-slate-900 mb-2">Financial Tools</h3>
                  <p className="text-slate-600 text-sm">
                    Calculators, templates, and resources to help you manage your money effectively.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-100 rounded-lg p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Important Disclaimer</h3>
          <p className="text-sm text-slate-600">
            The content on SavvyFinance is provided for educational and informational purposes only. 
            It is not intended as personalized financial advice and should not be relied upon as such. 
            Financial decisions should be made in consultation with qualified financial professionals 
            who can provide advice tailored to your individual circumstances. Past performance does not 
            guarantee future results, and all investments carry risk of loss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
