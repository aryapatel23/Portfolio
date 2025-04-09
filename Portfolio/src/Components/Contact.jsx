import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    const serviceID = 'service_9cjwjd6';
    const templateID = 'template_l4pe7zq';
    const publicKey = 'G7tQyCkKT5ua8s40F';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-black">
      {/* Floating Particles Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {[...Array(20)].map((_, index) => (
                <motion.span
                  key={index}
                  className="absolute inline-block w-1 h-1 rounded-full bg-white opacity-70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 50 - 25, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.8, 0.7],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: Math.random() * 4 + 2,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12 relative z-20" // Ensure content is above particles
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Get In <span className="text-green-600">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              disabled={isSending}
            >
              <Send className="h-5 w-5" />
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {statusMessage && (
              <p className="text-center mt-4 text-sm font-medium text-green-600">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;