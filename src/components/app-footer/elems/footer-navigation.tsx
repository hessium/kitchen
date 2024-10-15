import Link from 'next/link';

import { NAVIGATION } from '@/shared/constants/navigation';

export const FooterNavigation = () => (
  <nav className='mb-8 gap-6 flex-center md:mb-0 md:ml-auto'>
    {NAVIGATION.map((link) => (
      <Link
        key={link.path}
        className='text-primary hover:opacity-60'
        href={link.path}
      >
        {link.name}
      </Link>
    ))}
  </nav>
);
