import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../assets/Résumé_NAE.pdf';
import emailjs from '@emailjs/browser';

// Contact component
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_adt1etj', // EmailJS service ID
      'template_ms16poh', //  EmailJS template ID
      form.current,
      'TCizKR7DRJjkHPS-P' //  EmailJS public key
    )
      .then((result) => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSubmitStatus('error');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen w-full px-4 pt-4 pb-20 md:pt-8 md:pb-24 flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-[1400px] mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-white text-center">
          Let's Build Secure Solutions Together
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <section className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 flex flex-col">
            <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Send a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center">
                  Message sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors text-lg font-medium mt-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>
          
          {/* Direct Links */}
          <section className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 flex flex-col">
            <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Direct Links</h2>
            <ul className="space-y-8 flex-grow">
              <li className="flex flex-col items-center space-y-2">
                <FaEnvelope className="text-3xl text-white" />
                <a href="mailto:neilangelo.espinoza@gmail.com" className="text-gray-300 hover:text-white text-lg text-center">
                  neilangelo.espinoza@gmail.com
                </a>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaPhone className="text-3xl text-white" />
                <a href="tel:+639429682641" className="text-gray-300 hover:text-white text-lg text-center">
                  +63 942 96 82641
                </a>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaLinkedin className="text-3xl text-white" />
                <a href="https://www.linkedin.com/in/neil-angelo-espinoza-5aa626296/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-lg text-center">
                  https://www.linkedin.com/in/neil-angelo-espinoza-5aa626296/
                </a>
              </li>
              <li className="flex flex-col items-center space-y-2">
                <FaGithub className="text-3xl text-white" />
                <a href="https://github.com/neilangeloespinoza" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-lg text-center">
                  https://github.com/neilangeloespinoza
                </a>
              </li>
            </ul>
            
            <div className="mt-auto">
              <a 
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block px-6 py-4 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors text-lg font-medium text-center"
              >
                Grab a copy of my résumé
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;