'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { courses } from '@/lib/data';
import { Sparkles, Clock, IndianRupee } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="flex flex-col py-12 md:py-24 bg-gray-50 min-h-[90vh]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center text-sm font-semibold tracking-wide text-rose-500 uppercase"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Academy Courses
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
          >
            Professional Beauty Certification
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600"
          >
            Choose from our comprehensive range of masterclasses designed to transform beginners into successful industry professionals.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={course.id} 
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="p-8 flex-1">
                <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">{course.name}</h3>
                <p className="text-gray-600 mb-6 text-sm flex-1">{course.shortDescription}</p>
                
                <div className="space-y-3 mb-6 bg-rose-50/50 p-4 rounded-xl">
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-rose-500" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-start text-sm font-medium text-gray-700">
                    <IndianRupee className="w-4 h-4 mr-2 text-amber-500 mt-0.5" />
                    <span>{course.fees}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {course.highlights.slice(0, 4).map((hl, i) => (
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
                  className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-black hover:text-white hover:border-black"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
