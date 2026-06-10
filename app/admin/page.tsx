'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demonstration authentication
    if (password === 'admin123') {
      localStorage.setItem('as_admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-500 mb-6">
          <Lock className="h-8 w-8" />
        </div>
        
        <h1 className="font-serif text-2xl font-bold tracking-tight text-gray-900 mb-2">
          Administrator Login
        </h1>
        <p className="text-gray-500 mb-8 text-sm">
          Please authenticate to access the academy portal. (Demo password: admin123)
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter Password"
              className={`w-full rounded-xl border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : 'border-gray-200 focus:border-rose-500 focus:ring-rose-50'} px-4 py-3 text-center tracking-widest text-gray-900 shadow-sm outline-none transition-all focus:ring-4`}
            />
            {error && <p className="text-red-500 text-xs mt-2 font-medium">Invalid credentials.</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-black px-4 py-3.5 text-sm font-medium text-white transition-colors hover:bg-rose-500"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
