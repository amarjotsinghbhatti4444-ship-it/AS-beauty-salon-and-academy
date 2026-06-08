/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, LogOut, Award } from 'lucide-react';

interface Certificate {
  id: string;
  mobile: string;
  studentName: string;
  courseName: string;
  certificateId: string;
  issueDate: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  
  // Form State
  const [mobile, setMobile] = useState('');
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [issueDate, setIssueDate] = useState('');

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

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newCert: Certificate = {
      id: Math.random().toString(36).substr(2, 9),
      mobile,
      studentName,
      courseName,
      certificateId,
      issueDate
    };
    
    const updated = [...certificates, newCert];
    setCertificates(updated);
    localStorage.setItem('as_certificates', JSON.stringify(updated));
    
    // Reset form
    setMobile('');
    setStudentName('');
    setCourseName('');
    setCertificateId('');
    setIssueDate('');
  };

  const handleDelete = (id: string) => {
    const updated = certificates.filter(c => c.id !== id);
    setCertificates(updated);
    localStorage.setItem('as_certificates', JSON.stringify(updated));
  };

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-rose-100 p-2 rounded-lg text-rose-500">
              <Award className="w-5 h-5" />
            </div>
            <h1 className="font-serif text-xl font-bold text-gray-900">Admin Portal</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Add Form */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Issue New Certificate</h2>
              <form onSubmit={handleAdd} className="space-y-4 text-sm">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Student Name</label>
                  <input required value={studentName} onChange={e => setStudentName(e.target.value)} type="text" className="w-full rounded-lg border border-gray-200 p-2.5 outline-none focus:border-rose-500" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input required value={mobile} onChange={e => setMobile(e.target.value)} type="tel" className="w-full rounded-lg border border-gray-200 p-2.5 outline-none focus:border-rose-500" placeholder="+919876543210" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Course Name</label>
                  <input required value={courseName} onChange={e => setCourseName(e.target.value)} type="text" className="w-full rounded-lg border border-gray-200 p-2.5 outline-none focus:border-rose-500" placeholder="Basic Makeup Course" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Certificate ID</label>
                  <input required value={certificateId} onChange={e => setCertificateId(e.target.value)} type="text" className="w-full rounded-lg border border-gray-200 p-2.5 outline-none focus:border-rose-500" placeholder="AS-2023-001" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Issue Date</label>
                  <input required value={issueDate} onChange={e => setIssueDate(e.target.value)} type="date" className="w-full rounded-lg border border-gray-200 p-2.5 outline-none focus:border-rose-500" />
                </div>
                <button type="submit" className="w-full bg-black text-white hover:bg-rose-500 transition-colors p-3 rounded-lg font-medium flex items-center justify-center gap-2 mt-4">
                  <Plus className="w-4 h-4" /> Issue Certificate
                </button>
              </form>
            </div>
          </div>

          {/* List */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center justify-between">
              Issued Certificates
              <span className="text-xs bg-rose-100 text-rose-600 px-2.5 py-1 rounded-full font-semibold">{certificates.length} Total</span>
            </h2>
            
            {certificates.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center text-gray-500">
                No certificates have been issued yet.
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 text-gray-600 border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-medium">Student Info</th>
                        <th className="px-6 py-4 font-medium">Course Details</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {certificates.map(cert => (
                        <tr key={cert.id} className="hover:bg-gray-50/50">
                          <td className="px-6 py-4">
                            <div className="font-semibold text-gray-900">{cert.studentName}</div>
                            <div className="text-gray-500 text-xs mt-0.5">{cert.mobile}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-800">{cert.certificateId}</div>
                            <div className="text-gray-500 text-xs mt-0.5">{cert.courseName}</div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => handleDelete(cert.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-2"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
