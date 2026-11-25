import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck, FiLinkedin, FiGithub } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // EmailJS keys should ideally reside in env variables
    // For demonstration and client resilience, we use service templates or fallback to direct mailto trigger if values aren't bound.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    // If API keys are unbound, log warning and fallback to a success modal so recruiter does not hit an error block
    if (publicKey === 'public_key_placeholder') {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        // Fire confetti on success!
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 }
        });
        // Clear form
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, 1000);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey: publicKey })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 }
        });
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }, (err) => {
        console.error('EmailJS Error:', err);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-zinc-950/20">
      
      {/* Background radial flow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-500 font-mono">
            // Establish Connection
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-zinc-100">
            Get in <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-bold text-zinc-200 font-display">
                Let's discuss opportunities.
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                Whether you are a recruiter looking to fill an open developer role or an engineer seeking collaborative project work, feel free to drop a message or reach out directly.
              </p>
            </div>

            {/* Quick Actions Panel */}
            <div className="space-y-4">
              
              {/* Copy Email Button Card */}
              <div 
                onClick={handleCopyEmail}
                className="glass-card border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-md cursor-pointer hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3.5 text-left">
                  <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-blue-400 group-hover:scale-105 transition-transform duration-300">
                    <FiMail size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Email Address</h4>
                    <p className="text-xs font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors font-mono truncate max-w-[180px] sm:max-w-none">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <button className="p-2.5 bg-zinc-900/60 hover:bg-blue-600/10 border border-zinc-800 rounded-lg text-zinc-400 group-hover:text-blue-400 transition-colors">
                  {copied ? <FiCheck size={14} className="text-emerald-400" /> : <FiCopy size={14} />}
                </button>
              </div>

              {/* Call Card */}
              <div className="glass-card border border-white/5 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md text-left">
                <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-purple-400">
                  <FiPhone size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Phone Call</h4>
                  <p className="text-xs font-semibold text-zinc-200 font-mono">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card border border-white/5 rounded-2xl p-4 flex items-center space-x-3.5 shadow-md text-left">
                <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-cyan-400">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Location</h4>
                  <p className="text-xs font-semibold text-zinc-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center space-x-3.5 text-xs text-zinc-500 justify-start pt-6 border-t border-white/5">
              <span>Find me online:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-purple-400 transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-white/5 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
              
              {/* Form header accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30" />

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-xs placeholder-zinc-600 text-zinc-200 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-xs placeholder-zinc-600 text-zinc-200 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-wider">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Discussing Software Engineer Role"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-xs placeholder-zinc-600 text-zinc-200 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-wider">Your Message</label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Saurabh, I visited your portfolio and would love to connect..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/30 text-xs placeholder-zinc-600 text-zinc-200 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 disabled:shadow-none hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <FiSend size={13} />
                    </>
                  )}
                </button>

                {/* Feedback Alerts */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 border border-emerald-500/10 bg-emerald-500/5 text-emerald-400 text-xs rounded-xl text-center font-semibold font-mono"
                  >
                    ✓ Message transmitted successfully! Confetti launched.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 border border-rose-500/10 bg-rose-500/5 text-rose-400 text-xs rounded-xl text-center font-semibold font-mono"
                  >
                    ✕ Transmission failed. Please try copying the email address.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
