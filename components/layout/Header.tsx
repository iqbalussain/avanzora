import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Avanzora
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/about-us" className="hover:text-gray-900 transition-colors">About Us</Link>
          <Link href="/projects" className="hover:text-gray-900 transition-colors">Projects</Link>
        </nav>

        {/* Action Button */}
        <div>
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}