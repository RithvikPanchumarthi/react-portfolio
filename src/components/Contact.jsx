import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xgvlranb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Track form submission with Google Analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            'event_category': 'Contact',
            'event_label': 'Portfolio Contact Form'
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "rithvikpanchumarthi@gmail.com",
      link: "mailto:rithvikpanchumarthi@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Minneapolis, MN, USA",
      link: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/rithvikpanchumarthi/"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "View my repositories",
      link: "https://github.com/RithvikPanchumarthi"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in collaborating or discussing data engineering opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
              <p className="text-gray-300 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully. I'll get back to you soon!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                  <AlertCircle size={20} />
                  <span>Sorry, there was an error sending your message. Please try again or contact me directly.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow data professionals.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors">
                  <div className="flex-shrink-0 p-3 bg-primary-600 rounded-lg text-white">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : '_self'}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Links */}
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-white mb-4">More Resources</h4>
              <div className="space-y-3">
                <a
                  href="https://linktr.ee/rithvikpanchumarthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-primary-400 transition-colors"
                >
                  📚 Training & Certifications
                </a>
                <a
                  href="https://public.tableau.com/app/profile/rithvik.sai.panchumarthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-primary-400 transition-colors"
                >
                  📊 Tableau Public Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
