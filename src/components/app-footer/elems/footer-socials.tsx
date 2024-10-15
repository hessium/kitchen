import { Icon } from '@/shared/ui/icon/icon';

export const FooterSocials = () => (
  <nav className='ml-auto gap-6 flex-center md:mb-0'>
    <a
      className='rounded-50 size-10 border p-1 flex-center'
      href='/#'
    >
      <Icon
        className='size-4 fill-primary hover:fill-cyan-900'
        name='common/inst'
      />
    </a>
    <a
      className='rounded-50 size-10 border p-1 flex-center'
      href='/#'
    >
      <Icon
        className='size-4  fill-primary hover:fill-cyan-900'
        name='common/twitter'
      />
    </a>
    <a
      className='rounded-50 size-10 border p-1 flex-center'
      href='/#'
    >
      <Icon
        className='size-4  fill-primary hover:fill-cyan-900'
        name='common/yt'
      />
    </a>
  </nav>
);
