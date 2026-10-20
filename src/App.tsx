import { useState, useEffect } from 'react';

// WhatsApp number for consultation
const WHATSAPP_NUMBER = '2348033041489';

// Navigation Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#practice', label: 'Practice Areas' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm leading-tight">Ugoo Uzoho</p>
              <p className="text-[#daa520] text-xs">& Company</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#daa520] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ugoo%20Uzoho%20%26%20Company%2C%20I%20would%20like%20to%20request%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#daa520] hover:bg-[#b8860b] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md rounded-2xl mb-4 p-6 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-3 text-gray-300 hover:text-[#daa520] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ugoo%20Uzoho%20%26%20Company%2C%20I%20would%20like%20to%20request%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center bg-[#daa520] text-white px-5 py-3 rounded-full font-semibold"
            >
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-[#daa520] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#daa520] rounded-full"></div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#daa520]/10 border border-[#daa520]/30 text-[#daa520] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              ⚖️ Trusted Legal Excellence
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Justice Delivered
              <span className="block text-gradient-gold mt-2">With Integrity</span>
            </h1>
            
            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Ugoo Uzoho & Company is a premier law firm in Oyigbo, Port Harcourt, 
              providing exceptional legal representation with decades of combined experience 
              in Nigerian law.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#daa520] hover:bg-[#b8860b] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg shadow-[#daa520]/20"
              >
                Request Consultation
              </a>
              <a
                href="#practice"
                className="border border-white/20 hover:border-[#daa520] text-white px-8 py-4 rounded-full font-semibold transition-colors hover:bg-white/5"
              >
                Our Practice Areas
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-[#daa520]">15+</p>
                <p className="text-gray-400 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#daa520]">500+</p>
                <p className="text-gray-400 text-sm mt-1">Cases Won</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#daa520]">98%</p>
                <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right side - Decorative */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#daa520]/20 to-transparent flex items-center justify-center">
                <div className="w-60 h-60 rounded-full bg-gradient-to-br from-[#daa520]/30 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl">⚖️</span>
                    <p className="text-[#daa520] font-semibold mt-4 text-lg">Est. 2009</p>
                  </div>
                </div>
              </div>
              {/* Badges */}
              <div className="absolute top-5 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <p className="text-white text-sm font-medium">🏆 Award Winning</p>
              </div>
              <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <p className="text-white text-sm font-medium">📍 Port Harcourt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#daa520] font-semibold text-sm uppercase tracking-wider">About Our Firm</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 leading-tight">
              A Legacy of Legal
              <span className="text-gradient-gold"> Excellence</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Founded in Oyigbo, Port Harcourt, Ugoo Uzoho & Company has been at the 
              forefront of legal practice in Rivers State. Our team of dedicated attorneys 
              brings together deep expertise across multiple areas of Nigerian law.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe that every client deserves personalized attention and aggressive 
              representation. Our approach combines thorough legal research, strategic thinking, 
              and unwavering commitment to achieving the best outcomes for our clients.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#daa520]/10 flex items-center justify-center">
                  <span>✓</span>
                </div>
                <span className="text-gray-700 font-medium">NBA Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#daa520]/10 flex items-center justify-center">
                  <span>✓</span>
                </div>
                <span className="text-gray-700 font-medium">Client-First</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#daa520]/10 flex items-center justify-center">
                  <span>✓</span>
                </div>
                <span className="text-gray-700 font-medium">Proven Results</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#daa520]/10 flex items-center justify-center">
                  <span>✓</span>
                </div>
                <span className="text-gray-700 font-medium">Affordable Fees</span>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2744] rounded-3xl p-8 lg:p-12">
                <div className="text-center">
                  <span className="text-6xl mb-6 block">👨‍⚖️</span>
                  <h3 className="text-white text-2xl font-bold">Ugoo Uzoho</h3>
                  <p className="text-[#daa520] font-medium mt-1">Principal Partner</p>
                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    "Our mission is to provide accessible, high-quality legal services 
                    that protect the rights and interests of every client who walks through our doors."
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gray-400 text-sm">LL.B, B.L • Barrister & Solicitor</p>
                    <p className="text-gray-500 text-xs mt-1">Supreme Court of Nigeria</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-gold rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-gold rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Practice Areas Section
function PracticeAreas() {
  const areas = [
    {
      icon: '🏢',
      title: 'Corporate & Commercial Law',
      description: 'Business registration, corporate governance, mergers & acquisitions, and commercial transactions.',
    },
    {
      icon: '⚖️',
      title: 'Civil & Criminal Litigation',
      description: 'Aggressive representation in courts across Nigeria for civil disputes and criminal matters.',
    },
    {
      icon: '🏠',
      title: 'Real Estate & Property Law',
      description: 'Land acquisition, property disputes, tenancy agreements, and title perfection.',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Law',
      description: 'Divorce proceedings, child custody, maintenance, and estate planning.',
    },
    {
      icon: '📋',
      title: 'Employment & Labour Law',
      description: 'Workplace disputes, employee rights, wrongful termination, and labour compliance.',
    },
    {
      icon: '🛢️',
      title: 'Oil & Gas Law',
      description: 'Regulatory compliance, contracts, and disputes in the petroleum sector.',
    },
  ];

  return (
    <section id="practice" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#daa520] font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Our Practice Areas
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We offer comprehensive legal services tailored to meet the diverse needs 
            of individuals and businesses in Port Harcourt and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#daa520]/30 transition-all duration-300"
            >
              <span className="text-4xl block mb-4">{area.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#b8860b] transition-colors">
                {area.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyUs() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Results-Driven Approach',
      description: 'We focus on achieving the best possible outcome for every case we handle.',
    },
    {
      icon: '💬',
      title: 'Clear Communication',
      description: 'We keep you informed at every stage, explaining complex legal matters in simple terms.',
    },
    {
      icon: '🤝',
      title: 'Personalized Service',
      description: 'Every client receives individual attention and a strategy tailored to their unique situation.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees. We provide clear cost estimates before we begin any work.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#daa520] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 border border-[#daa520] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#daa520] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            What Sets Us Apart
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            When you choose Ugoo Uzoho & Company, you're choosing a firm that puts your 
            interests first and fights tirelessly for your rights.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <span className="text-4xl block mb-4">{reason.icon}</span>
              <h3 className="text-xl font-bold text-white">{reason.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section with WhatsApp Form
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const whatsappMessage = `Hello Ugoo Uzoho & Company,%0A%0AI would like to request a consultation.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#daa520] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Request a Consultation
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Fill out the form below and your request will be sent directly to our team via WhatsApp. 
            We'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2744] rounded-3xl p-8 h-full">
              <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#daa520]/20 flex items-center justify-center flex-shrink-0">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Office Address</p>
                    <p className="text-gray-400 text-sm mt-1">Oyigbo, Port Harcourt,<br />Rivers State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#daa520]/20 flex items-center justify-center flex-shrink-0">
                    <span>📞</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone Number</p>
                    <p className="text-gray-400 text-sm mt-1">+234 803 304 1489</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#daa520]/20 flex items-center justify-center flex-shrink-0">
                    <span>📧</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm mt-1">info@ugoouzoho.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#daa520]/20 flex items-center justify-center flex-shrink-0">
                    <span>🕐</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Working Hours</p>
                    <p className="text-gray-400 text-sm mt-1">Mon - Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ugoo%20Uzoho%20%26%20Company%2C%20I%20need%20legal%20assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors w-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.414.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <span className="text-5xl block mb-4">✅</span>
                <h3 className="text-2xl font-bold text-green-800">Request Sent!</h3>
                <p className="text-green-600 mt-2">Your consultation request has been sent via WhatsApp. We'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 outline-none transition-colors"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Litigation">Litigation</option>
                      <option value="Real Estate">Real Estate & Property</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Employment Law">Employment & Labour</option>
                      <option value="Oil & Gas">Oil & Gas</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 outline-none transition-colors resize-none"
                    placeholder="Briefly describe your legal matter..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#daa520] hover:bg-[#b8860b] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-[#daa520]/20 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.414.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Ugoo Uzoho</p>
                <p className="text-[#daa520] text-xs">& Company</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing exceptional legal services in Oyigbo, Port Harcourt since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#daa520] text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#daa520] text-sm transition-colors">About Us</a></li>
              <li><a href="#practice" className="text-gray-400 hover:text-[#daa520] text-sm transition-colors">Practice Areas</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#daa520] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Corporate Law</span></li>
              <li><span className="text-gray-400 text-sm">Litigation</span></li>
              <li><span className="text-gray-400 text-sm">Real Estate</span></li>
              <li><span className="text-gray-400 text-sm">Family Law</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">📍 Oyigbo, Port Harcourt</li>
              <li className="text-gray-400 text-sm">📞 +234 803 304 1489</li>
              <li className="text-gray-400 text-sm">📧 info@ugoouzoho.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ugoo Uzoho & Company. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built by <span className="text-[#daa520]">Vector Codes</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ugoo%20Uzoho%20%26%20Company%2C%20I%20need%20legal%20assistance.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.414.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
