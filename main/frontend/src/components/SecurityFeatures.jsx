import React, { useState } from "react";

export default function SecurityFeatures() {
  const [activeFeature, setActiveFeature] = useState('encryption');
  
  const securityFeatures = [
    {
      id: 'encryption',
      title: 'End-to-End Encryption',
      icon: '🔐',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Perfect Forward Secrecy',
        'Zero-knowledge architecture'
      ]
    },
    {
      id: 'access',
      title: 'Role-Based Access Control',
      icon: '👥',
      description: 'Granular permissions and access controls to ensure data security and privacy',
      details: [
        'Multi-level user roles',
        'Granular permission system',
        'Session management',
        'Audit trail logging'
      ]
    },
    {
      id: 'compliance',
      title: 'GDPR/CCPA Compliance',
      icon: '⚖️',
      description: 'Full compliance with international data protection regulations',
      details: [
        'GDPR compliance',
        'CCPA compliance',
        'Data portability',
        'Right to be forgotten'
      ]
    },
    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: '🛡️',
      description: '24/7 security monitoring and threat detection',
      details: [
        'Real-time threat detection',
        'Automated incident response',
        'Security analytics',
        'Penetration testing'
      ]
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: '🏆' },
    { name: 'ISO 27001', status: 'Certified', icon: '📋' },
    { name: 'GDPR', status: 'Compliant', icon: '🇪🇺' },
    { name: 'CCPA', status: 'Compliant', icon: '🇺🇸' },
    { name: 'HIPAA', status: 'Compliant', icon: '🏥' },
    { name: 'PCI DSS', status: 'Certified', icon: '💳' }
  ];

  const securityMetrics = [
    { metric: 'Uptime', value: '99.99%', description: 'Service availability' },
    { metric: 'Response Time', value: '<100ms', description: 'Average API response' },
    { metric: 'Data Breaches', value: '0', description: 'Security incidents' },
    { metric: 'Encryption', value: '100%', description: 'Data encrypted' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise <span className="gradient-text">Security & Privacy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your data security is our top priority. We implement industry-leading security measures to protect your information and ensure compliance with global regulations.
          </p>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityMetrics.map((metric, index) => (
            <div key={index} className="glass-dark p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-300 mb-1">{metric.metric}</div>
              <div className="text-xs text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <div className="flex flex-wrap gap-4 mb-8">
            {securityFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-blue'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{feature.icon}</span>
                {feature.title}
              </button>
            ))}
          </div>

          {securityFeatures.map((feature) => (
            activeFeature === feature.id && (
              <div key={feature.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-8xl opacity-50">{feature.icon}</div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Compliance & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{standard.name}</h4>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${
                  standard.status === 'Certified' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Data Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <div>
                  <div className="text-white font-medium">Data Minimization</div>
                  <div className="text-gray-400 text-sm">Only collect necessary data</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <div>
                  <div className="text-white font-medium">User Consent</div>
                  <div className="text-gray-400 text-sm">Explicit consent for data processing</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <div>
                  <div className="text-white font-medium">Data Portability</div>
                  <div className="text-gray-400 text-sm">Export your data anytime</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                <div>
                  <div className="text-white font-medium">Right to Deletion</div>
                  <div className="text-gray-400 text-sm">Complete data removal on request</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Security Measures</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">🔒</div>
                <div>
                  <div className="text-white font-medium">Multi-Factor Authentication</div>
                  <div className="text-gray-400 text-sm">Enhanced account security</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">🛡️</div>
                <div>
                  <div className="text-white font-medium">Regular Security Audits</div>
                  <div className="text-gray-400 text-sm">Quarterly security assessments</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">🔍</div>
                <div>
                  <div className="text-white font-medium">Intrusion Detection</div>
                  <div className="text-gray-400 text-sm">Real-time threat monitoring</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">📊</div>
                <div>
                  <div className="text-white font-medium">Security Analytics</div>
                  <div className="text-gray-400 text-sm">Advanced threat intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Contact */}
        <div className="text-center">
          <div className="glass-dark rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Security Questions?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our security team is available 24/7 to address any security concerns or questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
                🛡️ Security Center
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                📧 Contact Security Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
