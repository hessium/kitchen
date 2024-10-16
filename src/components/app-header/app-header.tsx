import { useState } from 'react';
import Link from 'next/link';

import useIsMobile from '@/shared/hooks/use-is-mobile';
import { Button } from '@/shared/ui/button/button';
import { Icon } from '@/shared/ui/icon/icon';

import { HeaderCart } from '@/components/app-header/elems/header-cart';
import { HeaderNavigation } from '@/components/app-header/elems/header-navigation';
import { Popup } from '@/components/popup/popup';

export const AppHeader = () => {
  const isMobile: boolean = useIsMobile();
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
    <header className=' px-8 py-5 text-center md:px-10 lg:text-left xl:px-28'>
      <div className='mx-auto flex w-full max-w-screen-2xl items-center gap-6'>
        <Link
          className='size-10 flex-center'
          href='/'
        >
          <Icon
            className='size-full fill-primary hover:fill-cyan-900'
            name='common/test'
          />
        </Link>
        <div className='items ml-auto flex gap-4'>
          {isMobile ? (
            <>
              <Button
                className='m-auto	ml-auto p-1'
                radius='md'
                variant='light'
                onClick={onOpenPopup}
              >
                <Icon
                  className='size-8 fill-primary hover:fill-cyan-900'
                  name='common/burger'
                />
              </Button>
              <Popup
                isOpen={isOpenPopup}
                onClose={onClosePopup}
              >
                <HeaderNavigation />
              </Popup>
            </>
          ) : (
            <HeaderNavigation />
          )}
          <HeaderCart />
        </div>
      </div>
    </header>
  );
};
