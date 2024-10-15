import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Icon } from '@/shared/ui/icon/icon';

import { HeaderCart } from '@/components/app-header/elems/header-cart';
import { HeaderNavigation } from '@/components/app-header/elems/header-navigation';
import { Popup } from '@/components/popup/popup';

export const AppHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const onOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const onClosePopup = () => {
    setIsOpenPopup(false);
  };

  return (
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

      {isMobile ? (
        <>
          <div onClick={onOpenPopup}>jnrhsnm</div>
          <Popup
            isOpen={isOpenPopup}
            onClose={onClosePopup}
          >
            <div className='flex flex-col'>
              <HeaderNavigation />

              <HeaderCart />
            </div>
          </Popup>
        </>
      ) : (
        <div className='gap-6 flex-center'>
          <HeaderNavigation />

          <HeaderCart />
        </div>
      )}
    </header>
  );
};
