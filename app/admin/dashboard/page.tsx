/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, LogOut, Search, Edit2, Shield, X, Image as ImageIcon } from 'lucide-react';

interface Certificate {
  id: string;
  mobile: string;
  studentName: string;
  courseName: string;
  certificateId: string;
  issueDate: string;
  certificateImage?: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [mobile, setMobile] = useState('');
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [certificateImage, setCertificateImage] = useState('');
  
  // Image Viewer State
  const [viewImage, setViewImage] = useState<string | null>(null);
  
  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const isAuth = localStorage.getItem('as_admin_auth');
    if (!isAuth) {
      router.push('/admin');
      return;
    }

    const storedData = localStorage.getItem('as_certificates');
    if (storedData) {
      setCertificates(JSON.parse(storedData));
    }
  }, [router, isClient]);

  const handleLogout = () => {
    localStorage.removeItem('as_admin_auth');
    router.push('/admin');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertificateImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Auto-generate certificate ID: "AS-YYYY-XXX"
    const currentYear = new Date().getFullYear();
    const randomDigits = Math.floor(100 + Math.random() * 900).toString().padStart(3, '0');
    const generatedId = `AS-${currentYear}-${randomDigits}`;

    const newCert: Certificate = {
      id: Math.random().toString(36).substr(2, 9),
      mobile,
      studentName,
      courseName,
      certificateId: generatedId,
      issueDate,
      certificateImage
    };
    
    const updated = [...certificates, newCert];
    setCertificates(updated);
    localStorage.setItem('as_certificates', JSON.stringify(updated));
    
    // Reset form
    setMobile('');
    setStudentName('');
    setCourseName('');
    setIssueDate('');
    setCertificateImage('');
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    const updated = certificates.filter(c => c.id !== id);
    setCertificates(updated);
    localStorage.setItem('as_certificates', JSON.stringify(updated));
  };

  if (!isClient) return null; // Prevent hydration mismatch

  const filteredCertificates = certificates.filter(cert => 
    cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.mobile.includes(searchQuery) ||
    cert.certificateId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#Fcfcfc] pb-20 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-rose-400 mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-widest uppercase">Admin Portal</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
              Certificate Management
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#5A3A31] text-white text-sm font-medium hover:bg-[#4a2f27] transition-colors"
            >
              <Plus className="w-4 h-4" />
              Issue New Certificate
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between p-2 pl-4">
          <div className="flex items-center flex-1 w-full text-gray-400">
            <Search className="w-5 h-5 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="Search by name, phone, or cert ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-gray-700 text-sm py-2 placeholder-gray-400"
            />
          </div>
          <div className="px-4 py-2 text-sm font-medium text-gray-500 whitespace-nowrap border-t sm:border-t-0 sm:border-l border-gray-100 w-full sm:w-auto text-center sm:text-left">
            Total Records: {filteredCertificates.length}
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#fcfcfc] text-gray-500 border-b border-gray-100 text-xs font-bold tracking-wider uppercase">
                <tr>
                  <th className="px-6 py-5">Student Identity</th>
                  <th className="px-6 py-5">Phone Number</th>
                  <th className="px-6 py-5">Course</th>
                  <th className="px-6 py-5">Cert. Number</th>
                  <th className="px-6 py-5">Date</th>
                  <th className="px-6 py-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredCertificates.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No matching records found.
                    </td>
                  </tr>
                ) : (
                  filteredCertificates.map(cert => (
                    <tr key={cert.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{cert.studentName}</td>
                      <td className="px-6 py-4 text-gray-500">{cert.mobile}</td>
                      <td className="px-6 py-4">{cert.courseName}</td>
                      <td className="px-6 py-4 text-rose-400 font-medium text-sm tracking-wide">{cert.certificateId}</td>
                      <td className="px-6 py-4 text-gray-600">{cert.issueDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {cert.certificateImage && (
                            <button 
                              onClick={() => setViewImage(cert.certificateImage!)}
                              className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition-colors"
                              title="View Certificate Image"
                            >
                              <ImageIcon className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button 
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                            title="Edit Record (Demo)"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={() => handleDelete(cert.id)}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Issue Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md overflow-hidden relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Issue New Certificate</h2>
              <form onSubmit={handleAdd} className="space-y-4 text-sm">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Student Name</label>
                  <input required value={studentName} onChange={e => setStudentName(e.target.value)} type="text" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all" placeholder="Enter student name" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required value={mobile} onChange={e => setMobile(e.target.value)} type="tel" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all" placeholder="Enter mobile number" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Course Name</label>
                  <input required value={courseName} onChange={e => setCourseName(e.target.value)} type="text" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all" placeholder="e.g. Master Course" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Issue Date</label>
                  <input required value={issueDate} onChange={e => setIssueDate(e.target.value)} type="date" className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-50 transition-all" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Upload Certificate (Optional)</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 outline-none" />
                  {certificateImage && <div className="mt-1 text-xs text-green-600 font-medium">Image uploaded successfully ✓</div>}
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#5A3A31] text-white hover:bg-[#4a2f27] transition-colors p-3.5 rounded-xl font-medium flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Issue Certificate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Image Modal */}
      {viewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
            <button 
              onClick={() => setViewImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={viewImage} alt="Certificate" className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
          </div>
        </div>
      )}

    </div>
  );
}
