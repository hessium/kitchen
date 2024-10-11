import { Icon } from '@/shared/ui/icon/icon';

export const HeaderCart = () => (
  <button
    disabled
    className='flex-center bg-primary size-10 cursor-pointer rounded p-2 hover:bg-cyan-900'
  >
    <Icon name='common/cart' />
  </button>
);
