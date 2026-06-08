'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Phone, MessageCircle, MapPin } from 'lucide-react';
import { siteInfo } from '@/lib/data';

import img1 from '@/src/assets/images/regenerated_image_1780911474652.jpg';
import img2 from '@/src/assets/images/regenerated_image_1780911476549.jpg';
import img3 from '@/src/assets/images/regenerated_image_1780911478373.jpg';
import img4 from '@/src/assets/images/regenerated_image_1780911707029.jpg';

const services = [
  {
    id: "hair-care",
    title: "Hair Styling & Hair Care",
    description: "Transform your look with modern haircuts, styling, coloring, and professional hair treatments.",
    image: img1,
    items: [
      "Professional Hair Cutting",
      "Hair Styling",
      "Blow Dry Styling",
      "Hair Spa",
      "Hair Smoothening",
      "Hair Rebonding",
      "Keratin Treatment",
      "Hair Botox Treatment",
      "Hair Coloring",
      "Highlights & Balayage"
    ]
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description: "Get a flawless bridal look with premium products and professional makeup artistry.",
    image: img2,
    items: [
      "HD Bridal Makeup",
      "Airbrush Bridal Makeup",
      "Punjabi Bridal Makeup",
      "Engagement Makeup",
      "Reception Makeup",
      "Party Makeup",
      "Saree & Dupatta Draping",
      "Bridal Hairstyling"
    ]
  },
  {
    id: "nail-art",
    title: "Nail Art & Extensions",
    description: "Enhance your beauty with trendy nail extensions and creative nail art designs.",
    image: img3,
    items: [
      "Nail Extensions",
      "Gel Extensions",
      "Poly Gel Extensions",
      "Gel Polish",
      "French Nails",
      "Ombre Nails",
      "Chrome Nails",
      "Bridal Nails",
      "Luxury Nail Art",
      "Korean Nail Designs"
    ]
  },
  {
    id: "skin-care",
    title: "Skin Care & Treatments",
    description: "Professional skincare solutions for healthy, glowing, and radiant skin.",
    image: img4,
    items: [
      "Hydra Facial",
      "O3 Facial",
      "Gold Facial",
      "Diamond Facial",
      "Anti-Aging Facial",
      "Skin Brightening Treatment",
      "De-Tan Treatment",
      "BB Glow Treatment",
      "Korean Glass Skin Treatment",
      "Face Cleanup"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col py-12 md:py-24 bg-gray-50 min-h-[90vh]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center text-sm font-semibold tracking-wide text-rose-500 uppercase"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Our Beauty Menu
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
          >
            Professional Beauty & Salon Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600"
          >
            Experience premium care with our extensive range of specialized beauty treatments and styling services.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="space-y-16 lg:space-y-24 mb-24">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={service.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-100 shadow-sm group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="font-serif text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-rose-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <a
                    href={`tel:${siteInfo.phone?.replace(/\s/g, '')}`}
                    className="inline-flex items-center text-sm font-semibold tracking-wide text-rose-500 hover:text-rose-600 transition-colors"
                  >
                    Book This Service <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-32 h-32 text-rose-900" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-5">
            <Sparkles className="w-32 h-32 text-amber-900" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Ready for a transformation? Reserve your spot for a premium salon experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteInfo.phone?.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-rose-500"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteInfo.phone?.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-medium text-gray-900 transition-colors hover:border-black hover:bg-gray-50"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Visit Salon
              </Link>
            </div>
            
            <div className="mt-8 text-sm font-medium text-gray-500">
              Call us directly at <span className="text-gray-900">{siteInfo.phone}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
