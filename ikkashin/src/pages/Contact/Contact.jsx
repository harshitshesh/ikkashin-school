import React, { useState } from 'react';
import { SCHOOL_INFO } from '../../data/mockData';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import Button from '../../components/common/Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Reach Out to Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact & Campus Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Have queries regarding admissions, NDA selection trials, or hostel accommodation? Get in touch with our administrative helpdesk.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Send an Official Inquiry</h2>
          
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-emerald-950 text-lg">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-slate-600">Our administrative officer will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject *</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Inquiry regarding NDA Wing Admission Class 11"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or question here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full py-3" icon={Send}>
                Submit Inquiry Message
              </Button>
            </form>
          )}
        </div>

        {/* Right Column: Address & Map Placeholder */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-bold text-lg text-white">Campus Contact Helplines</h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Office Hours: Mon - Sat (8:30 AM to 4:30 PM)</span>
              </div>
            </div>
          </div>

          {/* Interactive Map card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-md space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Interactive Campus Location Map</h4>
            <div className="h-52 bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-center p-4 border border-slate-200">
              <MapPin className="w-10 h-10 text-amber-600 mb-2 animate-bounce" />
              <span className="font-bold text-slate-800 text-xs">{SCHOOL_INFO.name}</span>
              <span className="text-[11px] text-slate-500 max-w-xs mt-1">Baluni Bypass Road, Near ISBT, Dehradun</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
