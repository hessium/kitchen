import Link from 'next/link';

import { Icon } from '@/shared/ui/icon/icon';

import { HeaderCart } from '@/components/app-header/elems/header-cart';
import { HeaderNavigation } from '@/components/app-header/elems/header-navigation';

export const AppHeader = () => (
  <header className='flex w-full items-center justify-between  gap-6 bg-zinc-600 px-5 py-5'>
    <Link
      className='flex-center size-10'
      href='/'
    >
      <Icon
        className='fill-primary size-full hover:fill-cyan-900'
        name='common/test'
      />
    </Link>

    <div className='flex-center gap-6'>
      <HeaderNavigation />
      <HeaderCart />
    </div>
  </header>
);
