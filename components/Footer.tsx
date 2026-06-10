import Link from 'next/link';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { siteInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-white md:text-2xl block">
              AS BEAUTY <span className="text-rose-400">SALON</span>
            </span>
            <p className="text-sm leading-relaxed">
              Luxury Beauty Salon & Professional Beauty Academy offering professional training and premium salon services in Khanna.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-rose-500 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rose-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-rose-400 transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/verify-certificate" className="hover:text-rose-400 transition-colors">Verify Certificate</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-amber-500" />
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-amber-500" />
                <span>{siteInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-amber-500" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-rose-400 transition-colors">{siteInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-sm">
          <p>© {new Date().getFullYear()} AS Beauty Salon & Academy. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <Link href="/admin" className="text-white/40 hover:text-white transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
