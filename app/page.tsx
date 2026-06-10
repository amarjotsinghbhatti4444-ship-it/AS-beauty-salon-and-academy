'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { courses } from '@/lib/data';

import heroImage from '@/src/assets/images/regenerated_image_1780910807451.jpg';
import aboutImage from '@/src/assets/images/regenerated_image_1780910809881.jpg';

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-rose-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Luxury Beauty Salon"
            fill
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50/90 to-white/60" />
        </div>
        
        <div className="container relative z-10 px-4 py-20 lg:px-8 mx-auto">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-rose-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-rose-600 backdrop-blur-sm"
            >
              <Star className="mr-2 h-4 w-4 fill-rose-500 text-rose-500" />
              Premium Beauty Academy in Khanna
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl lg:text-8xl"
            >
              Master the Art of <span className="text-rose-500 italic block mt-2">Beauty</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-lg text-gray-600 md:text-xl"
            >
              Step into the world of luxury beauty with our professional salon services and industry-leading academy courses. Learn from experts with 3+ years of experience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-colors hover:bg-rose-600"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 text-base font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                Call Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Excellence in Every Detail
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At AS Beauty Salon and Academy, we combine luxury salon experiences with world-class professional training. Our 1+ year successful academy run is backed by over 3 years of deep industry expertise.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "3+ Years Professional Experience",
                  "100% Practical Training Environment",
                  "Industry Standard Certification",
                  "Expert Trainers & Live Model Practice"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-amber-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center font-semibold text-rose-500 hover:text-rose-600"
                >
                  Discover Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-2xl border-2 border-amber-200" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={aboutImage}
                  alt="Professional Makeup Artist"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-5xl mb-4">
              Featured Academy Courses
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Launch your fulfilling career in beauty with our comprehensive, certified masterclasses.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <div key={course.id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md border border-gray-100">
                <div className="p-8 flex-1">
                  <h3 className="font-serif text-xl font-bold mb-3">{course.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{course.shortDescription}</p>
                  <ul className="space-y-2 mb-8">
                    {course.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-rose-400" />
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center font-semibold text-rose-500 hover:text-rose-600"
            >
              Explore All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
