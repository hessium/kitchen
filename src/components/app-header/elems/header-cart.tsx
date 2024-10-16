import { useState } from 'react';

import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icon/icon';

import { Popup } from '@/components/popup/popup';

export const HeaderCart = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const onOpenPopup = (): void => {
    document.body.classList.add('lock-scroll');
    setIsOpenPopup(true);
  };

  const onClosePopup = (): void => {
    document.body.classList.remove('lock-scroll');
    setIsOpenPopup(false);
  };

  return (
    <div className='relative'>
      <Button
        isIconOnly
        className='mx-auto'
        color='primary'
        radius='md'
        onClick={onOpenPopup}
      >
        <Icon
          className='size-5 fill-white'
          name='common/cart'
        />
      </Button>
      <Popup
        isOpen={isOpenPopup}
        onClose={onClosePopup}
      >
        Корзина пуста
      </Popup>
    </div>
  );
};
