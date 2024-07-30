import Logo from '@/components/svg/Logo';

import Link from 'next/link';

import { NAV_LINKS, NavLink } from '@/lib/constants';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="ml-8 hidden md:block">
              <Link href="/get-started"  className="px-4 py-4 bg-primary text-white rounded-md hover:bg-primary/80">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;