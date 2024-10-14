import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icon/icon';

export const HeaderCart = () => (
  <Button
    isIconOnly
    color='primary'
    radius='lg'
  >
    <Icon name='common/cart' />
  </Button>
);
