import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Avanzora. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/about-us" className="hover:text-gray-900">About Us</Link>
          <Link href="/projects" className="hover:text-gray-900">Projects</Link>
        </div>
      </div>
    </footer>
  );
}