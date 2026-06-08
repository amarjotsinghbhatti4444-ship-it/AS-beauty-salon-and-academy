'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { courses } from '@/lib/data';
import { Clock, IndianRupee, CheckCircle2, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function CourseDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const course = courses.find(c => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col py-12 md:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        <Link href="/courses" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-rose-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Courses
        </Link>
        
        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-5xl mb-6"
          >
            {course.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 mb-8 max-w-3xl"
          >
            {course.details}
          </motion.p>
          
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="flex items-center bg-rose-50 rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose-500 mr-4 shadow-sm">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Duration</div>
                <div className="text-lg font-semibold text-gray-900">{course.duration}</div>
              </div>
            </div>
            
            <div className="flex items-center bg-amber-50 rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-amber-500 mr-4 shadow-sm">
                <IndianRupee className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Investment</div>
                <div className="text-lg font-semibold text-gray-900">{course.fees}</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-12">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">What You Will Learn</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.highlights.map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-900 font-medium tracking-tight">Professional Certification</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-rose-500 flex-1 sm:flex-none"
            >
              Enroll Now
            </Link>
            <a
              href="tel:+917889240608"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-gray-50 flex-1 sm:flex-none"
            >
              Call for Consultation
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
