'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Sparkles } from 'lucide-react';
import aboutImage from '@/src/assets/images/regenerated_image_1780911332618.jpg';

export default function AboutPage() {
  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center text-sm font-semibold tracking-wide text-rose-500 uppercase"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Our Story
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-6xl"
          >
            Elevating the Standard of <span className="italic text-rose-500">Beauty</span>
          </motion.h1>
        </div>

        {/* Story Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-rose-100 rounded-full translate-x-4 translate-y-4" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-8 border-white bg-gray-100">
              <Image
                src={aboutImage}
                alt="Salon Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">
              AS Beauty Salon and Academy
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Located in the heart of Khanna, AS Beauty Salon and Academy stands as a beacon of professional beauty services and comprehensive education. With specialized focus on practical training and modern techniques, we have been transforming passions into successful careers.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Having over 3 years of deep professional experience, our founding vision was simple: to bring international standard beauty services and education to our local community.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-2 border-rose-200 pl-4">
                <div className="font-serif text-3xl font-bold text-gray-900">3+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="border-l-2 border-rose-200 pl-4">
                <div className="font-serif text-3xl font-bold text-gray-900">1+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">Year Academy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Why Choose Our Academy?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Professional Training", icon: BookOpen, desc: "Step-by-step guidance from fundamentals to advanced artistry." },
              { title: "Live Model Practice", icon: Heart, desc: "100% practical training environment with real clients and models." },
              { title: "Industry Experts", icon: Award, desc: "Learn from recognized professionals with deep industry knowledge." },
              { title: "Career Support", icon: Sparkles, desc: "Professional certification with guidance to start your own business." },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500 mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
