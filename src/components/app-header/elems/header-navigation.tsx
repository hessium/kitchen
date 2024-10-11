import Link from 'next/link';

import { NAVIGATION } from '@/shared/constants/navigation';

export const HeaderNavigation = () => (
  <nav className='gap-6 flex-center'>
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
