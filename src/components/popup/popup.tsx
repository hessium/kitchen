import { Slottable } from '@radix-ui/react-slot';

import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icon/icon';
import { cn } from '@/shared/utils/cn';

import classes from '@/components/popup/popup.module.css';

export const Popup = ({
  isOpen,
  onClose,
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div
    className={cn(isOpen ? classes.active : '', classes.popup)}
    onClick={onClose}
  >
    <Button
      asChild
      variant='light'
    >
      <Icon
        className='absolute right-1 top-5 size-4 fill-primary hover:fill-cyan-900'
        name='common/close'
      />
    </Button>
    <div
      className={classes.popup__wrap}
      onClick={(e) => e.stopPropagation()}
    >
      <Slottable>{children}</Slottable>
    </div>
  </div>
);
