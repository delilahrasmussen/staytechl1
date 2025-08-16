import React from 'react';
import { Check, Star, Shield, Crown, Zap, Sparkles, ArrowRight, Globe, Calendar, Settings, BarChart3, Users, Wifi, Search, Image, Phone, MessageCircle, TrendingUp, CreditCard, Database, Headphones } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Website Design & Development',
      price: '₹19,999',
      period: '',
      description: 'A complete, mobile-friendly hotel website built to impress and convert',
      badge: 'Essential',
      badgeColor: 'from-blue-500 to-blue-600',
      features: {
        'Design & Content': [
          'Website Design & Development (Beautiful site design and coding)',
          'Content Writing & Editing (We write or polish your existing content)',
          'Unlimited Pages (As many pages as your hotel needs—no restrictions)',
          'Logo Design (Custom or refinements to your existing logo)',
          'Mobile-Responsive Design (Optimized for all devices)'
        ],
        'Technical & Performance': [
          'SEO Optimization (On-page SEO best practices for visibility)',
          'SSL Certificate (Ensures secure browsing for your guests)',
          'Fast Loading Performance (Optimized for speed and performance)',
          'Image Optimization (For fast and sharp visuals)',
          'Complimentary Domain Name (Free for the first year)',
          'Complimentary Hosting (Free for the first year)'
        ],
        'Integrations & Features': [
          'Contact & Inquiry Form (With email delivery setup)',
          'Social Media Integration (Linking Facebook, Instagram, etc.)',
          'WhatsApp Chat Integration (One-tap link for guests to message)',
          'Basic Analytics Integration (Google Analytics setup)'
        ],
        'Post-Launch Support': [
          'Training & Handover (Basic walkthrough and guide after launch)',
          'Three Free Updates a Year (Complimentary design/content revisions)'
        ]
      },
      popular: false,
      color: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50 to-indigo-50',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Website + Booking Engine',
      price: '₹39,999',
      period: '',
      description: 'All the features of the first plan, plus a powerful booking system with admin control',
      badge: 'Complete Solution',
      badgeColor: 'from-[#5FBDB0] to-[#0A2463]',
      features: {
        'You get Everything in Website Package': [
          'Complete Website Design & Development package included',
          'All design, content, and technical features from above'
        ],
        'Booking Engine Features': [
          'Integrated Booking Engine (Seamless, branded booking system)',
          'Admin Dashboard Access (Full control panel for bookings)',
          'Pricing & Availability Control (Easy rate and availability updates)',
          'Booking Management Tools (Manage reservations in one place)',
          'Real-Time Booking Updates (Instant updates to avoid double bookings)',
          'Secure Payment Processing (Trusted payment gateways)'
        ],
        'Business Benefits': [
          'Commission-Free Bookings (100% yours—no third-party fees)',
          'Guest Management System (Track guest details and history)',
          'Booking Engine Styling (Matches your website perfectly)',
          'Booking Flow Optimization (Designed to maximize conversions)',
          'Booking Engine Training (Team walkthrough included)'
        ]
      },
      popular: false,
      color: 'from-[#0A2463] to-[#5FBDB0]',
      bgGradient: 'from-blue-50 to-teal-50',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      period: 'pricing',
      description: 'Advanced tools, integrations, and multi-property support tailored for larger hotels or chains',
      badge: 'Enterprise',
      badgeColor: 'from-purple-500 to-indigo-600',
      features: {
        'You get Everything in Previous Packages': [
          'Complete Website + Booking Engine package included',
          'All features from both previous tiers'
        ],
        'Advanced Management': [
          'Complete Property Management System (Full PMS dashboard)',
          'Intelligent Analytics Dashboard (Real-time performance tracking)',
          'Revenue Management Tools (Dynamic pricing and optimization)',
          'Multi-Property Support (Manage multiple locations)',
          'Advanced Reporting (Custom reports and insights)'
        ],
        'Enterprise Support': [
          'Dedicated Account Manager (Single point of contact)',
          'Enterprise-Level Support (Priority assistance and monitoring)',
          'Custom Integrations (API and third-party software)',
          'Team Access & Permissions (Multi-user access control)',
          'Guest CRM Integration (Personalized communication tools)',
          'Marketing Integration Support (Email marketing and remarketing)'
        ]
      },
      popular: false,
      color: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5FBDB0]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A2463]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
            <span className="font-semibold">Our Website Packages</span>
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2463] font-poppins mb-6 leading-tight">
            Flexible Options for
            <span className="block bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] bg-clip-text text-transparent">
              Hotels of Every Size
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6 mb-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Whether you're a boutique stay, a family-run homestay, or a fast-growing hotel brand, 
              we have a plan that fits your needs. Choose from three tiers of service based on how 
              hands-on you want us to be.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Each package is designed to help you attract more guests, increase direct bookings, 
              and present your property beautifully online. You only pay for what you need, with 
              clear deliverables and no hidden costs.
            </p>
          </div>
        </div>

        {/* Package Overview Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 overflow-hidden ${
                'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Popular Badge */}
              {/* Plan Badge */}
              {plan.badge && (
                <div className="absolute top-6 right-6 z-20">
                  <div className={`bg-gradient-to-r ${plan.badgeColor} text-white px-4 py-2 rounded-full text-xs font-bold shadow-md`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative z-10 p-8 pt-12">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-3 font-poppins">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {plan.description}
                  </p>
                  
                  {/* Price Display */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6 border border-gray-100">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                    {plan.name !== 'Enterprise Package' && (
                      <div className="text-sm text-gray-500">
                        Complete package pricing
                      </div>
                    )}
                  </div>
                </div>

                {/* Features by Category */}
                <div className="space-y-6 mb-8">
                  {Object.entries(plan.features).map(([category, features], categoryIndex) => (
                    <div key={categoryIndex} className="bg-gray-50/50 rounded-xl p-4">
                      <h4 className="font-bold text-[#0A2463] mb-3 text-sm uppercase tracking-wide">
                        {category}
                      </h4>
                      <div className="space-y-2">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform duration-200`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed group-hover/feature:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Add plus icon between specific sections */}
                      {((plan.name === 'Website + Booking Engine' && category === 'You get Everything in Website Package') ||
                        (plan.name === 'Enterprise Package' && category === 'You get Everything in Previous Packages')) && (
                        <div className="flex justify-center my-6">
                          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-2xl px-8 py-4 shadow-xl border-2 border-white transform rotate-1">
                            <h3 className="text-[#0A2463] font-bold text-2xl italic tracking-wider">Plus</h3>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white hover:shadow-[#0A2463]/25'
                    : plan.name === 'Enterprise Package'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/25'
                }`}>
                  {plan.name === 'Enterprise Package' ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Crown className="w-5 h-5" />
                      <span>Get Custom Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Choose This Package</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>

                {/* Popular Plan Extra CTA */}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#5FBDB0]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Guarantee Section */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#5FBDB0]/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0A2463]" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white font-poppins">
                  Our Commitment to Your Success
                </h3>
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0A2463]" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                We believe in earning your trust through results, not contracts. That's why we offer 
                transparent pricing and guarantee your satisfaction before any payment is required.
              </p>

              {/* Guarantee Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#0A2463]" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg text-white">No Advance Payment Required</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Pay only when your website is ready and you're completely satisfied with the result.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0A2463] font-bold text-2xl">∞</span>
                  </div>
                  <h4 className="font-bold mb-3 text-lg text-white">Unlimited Revisions</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We make as many adjustments as needed during the design phase until you're satisfied.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0A2463] font-bold text-2xl">✓</span>
                  </div>
                  <h4 className="font-bold mb-3 text-lg text-white">Clear Deliverables</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Transparent pricing with clear deliverables and no hidden costs or surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Sparkles className="w-8 h-8 text-[#FFD700]" />
                <h3 className="text-2xl md:text-4xl font-bold font-poppins">
                  Ready to Transform Your Hotel's Online Presence?
                </h3>
                <Sparkles className="w-8 h-8 text-[#FFD700]" />
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of hotels that have increased their direct bookings and enhanced their 
                guest experience with StayTech's professional website solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#contact" className="group bg-[#FFD700] text-[#0A2463] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3">
                  <span>Start Your Project Today</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20 hover:border-white/40">
                  Schedule Free Consultation
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>200+ Hotels Served</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>5.0 Average Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>No Advance Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>7-Day Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;