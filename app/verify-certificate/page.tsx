'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Award, CheckCircle2, XCircle } from 'lucide-react';

export default function VerifyCertificatePage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [certificateData, setCertificateData] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber) return;
    
    // Simple verification simulation from local storage
    const storedDataStr = localStorage.getItem('as_certificates');
    const storedData = storedDataStr ? JSON.parse(storedDataStr) : [];
    
    const found = storedData.find((cert: any) => cert.mobile === mobileNumber);
    
    setCertificateData(found || null);
    setHasSearched(true);
  };

  return (
    <div className="flex flex-col py-12 md:py-24 bg-gray-50 min-h-[90vh]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500 mb-6">
            <Award className="h-8 w-8" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            Verify Student Certificate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-600"
          >
            Enter your registered mobile number to verify authenticity of credentials issued by AS Beauty Salon and Academy.
          </motion.p>
        </div>

        <div className="mx-auto max-w-xl">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative flex items-center">
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter Mobile Number"
                className="w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pl-6 pr-32 text-gray-900 shadow-sm outline-none transition-all focus:border-rose-300 focus:ring-4 focus:ring-rose-50"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 rounded-xl bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-rose-500 flex items-center"
              >
                <Search className="mr-2 h-4 w-4" />
                Verify
              </button>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {hasSearched && (
              <motion.div
                key={certificateData ? 'found' : 'not-found'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm overflow-hidden relative"
              >
                {certificateData ? (
                  <>
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Award className="w-32 h-32 text-rose-900" />
                    </div>
                    <div className="flex items-center gap-3 text-green-600 font-semibold mb-6">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Verified Certificate Found</span>
                    </div>
                    
                    <div className="space-y-6 relative z-10">
                      <div>
                        <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Student Name</div>
                        <div className="text-xl font-serif font-bold text-gray-900">{certificateData.studentName}</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Course Name</div>
                          <div className="text-sm font-medium text-gray-800">{certificateData.courseName}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Certificate ID</div>
                          <div className="text-sm font-mono font-medium text-gray-600">{certificateData.certificateId}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Issue Date</div>
                          <div className="text-sm font-medium text-gray-800">{new Date(certificateData.issueDate).toLocaleDateString()}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">Status</div>
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </div>
                        </div>
                      </div>
                      
                      {certificateData.certificateImage && (
                        <div className="pt-6 border-t border-gray-100 mt-6">
                          <div className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Certificate Document</div>
                          <img 
                            src={certificateData.certificateImage} 
                            alt={`Certificate for ${certificateData.studentName}`} 
                            className="w-full h-auto rounded-xl border border-gray-200 shadow-sm object-contain max-h-[600px] bg-gray-50" 
                          />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Records Found</h3>
                    <p className="text-gray-500 text-sm">
                      We could not find a verified certificate associated with {mobileNumber}. Please ensure you entered the correct number.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
