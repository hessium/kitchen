import Link from 'next/link';

import { Icon } from '@/shared/ui/icon/icon';

import { HeaderCart } from '@/components/app-header/elems/header-cart';
import { HeaderNavigation } from '@/components/app-header/elems/header-navigation';

export const AppHeader = () => (
  <header className='flex w-full items-center justify-between  gap-6 px-5 py-5'>
    <Link
      className='size-10 flex-center'
      href='/'
    >
      <Icon
        className='size-full fill-primary hover:fill-cyan-900'
        name='common/test'
      />
    </Link>

    <div className='gap-6 flex-center'>
      <HeaderNavigation />

      <HeaderCart />
    </div>
  </header>
);
