'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { siteInfo } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="flex flex-col py-12 md:py-24 bg-rose-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-600"
          >
            We are here to help you begin your journey in professional beauty or book your premium salon appointment.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 tracking-widest uppercase">Phone / WhatsApp</p>
                    <p className="text-lg font-medium text-gray-900">{siteInfo.phone}</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 tracking-widest uppercase">Email Address</p>
                    <p className="text-lg text-gray-900">{siteInfo.email}</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 tracking-widest uppercase">Visit Us</p>
                    <p className="text-gray-900 leading-relaxed">{siteInfo.address}</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${siteInfo.phone?.replace(/\\s/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-500"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${siteInfo.phone?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-[300px] flex items-center justify-center overflow-hidden relative border border-gray-100">
              {/* Replace with actual iframe embed if provided later */}
              <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl m-4 z-10 shadow-sm text-gray-600">
                <MapPin className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                Map Location Embed<br/>
                <span className="text-xs">Khanna-GTB Market</span>
              </div>
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/400')] opacity-50 mix-blend-overlay"></div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Inquiry Type</label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all appearance-none"
                >
                  <option>Academy Admissions</option>
                  <option>Salon Appointment</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-black px-4 py-4 text-sm font-medium text-white transition-colors hover:bg-rose-500 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
