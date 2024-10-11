import Link from 'next/link';

import { LINKS } from '@/shared/constants/links';
import { Icon } from '@/shared/ui/icon/icon';

export const AppHeader = () => (
  <header className='h-header justify-between gap-6	 bg-zinc-600 flex-center span:font-bold'>
    <Icon name='common/test' />

    <div className='flex-center'>
      <nav>
        {LINKS.map((link) => (
          <Link
            key={link.path}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button>Корзина</button>
    </div>
  </header>
);
