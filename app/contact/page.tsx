'use client';

import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        type: 'general',
      });
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">Contact</h1>
          
          <div className="space-y-16">
            {/* Contact Info */}
            <section>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg">
                <h2 className="text-2xl text-white mb-6 font-light">Get in Touch</h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  If you're a founder working on innovative brain health solutions, or if you would like to invest, we'd love to hear from you!
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-white/60 mb-2 font-light">Email</h3>
                    <a 
                      href="mailto:invest@mystic.ventures" 
                      className="text-white text-xl hover:text-white/80 transition-colors"
                    >
                      invest@mystic.ventures
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 