import Image from 'next/image';

import {
  CONTAINER_CLS,
  CONTAINER_IMG_CLS,
  CONTAINER_TEXT_CLS,
} from '@/shared/constants/classes';
import { Button } from '@/shared/ui/button/button';
import { cn } from '@/shared/utils/cn';

import { MainSection } from '@/containers/main-section/main-section';

export const Hero = () => (
  <MainSection>
    <div className='bg-primary-50 p-8 md:p-10 xl:p-28'>
      <div className={cn(CONTAINER_CLS, 'lg:text-left')}>
        <div className={cn(CONTAINER_TEXT_CLS)}>
          <h1 className='mb-6 text-3xl md:text-4xl xl:text-6xl'>
            Beautiful food & takeaway,
            <span className='text-primary'>delivered</span> to your door.
          </h1>
          <p className='mb-8 text-primary-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500.
          </p>
          <Button
            className='text-white'
            color='primary'
            radius='md'
          >
            Place an Order
          </Button>
        </div>
        <div className={cn(CONTAINER_IMG_CLS)}>
          <Image
            fill
            alt='Picture of the author'
            quality={100}
            src='/images/hero-banner.png'
          />
        </div>
      </div>
    </div>
  </MainSection>
);
