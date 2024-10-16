import Image from 'next/image';

import {
  CONTAINER_CLS,
  CONTAINER_IMG_CLS,
  CONTAINER_TEXT_CLS,
} from '@/shared/constants/classes';
import { Button } from '@/shared/ui/button/button';
import { cn } from '@/shared/utils/cn';

import { MainSection } from '@/containers/main-section/main-section';

export const About = () => (
  <MainSection>
    <div className='p-8 md:p-10 xl:p-28'>
      <div className={cn(CONTAINER_CLS)}>
        <div className={cn(CONTAINER_IMG_CLS)}>
          <Image
            fill
            alt='Picture of the author'
            quality={100}
            src='/images/about-banner.png'
          />
        </div>
        <div className={cn(CONTAINER_TEXT_CLS)}>
          <h2 className='mb-6 text-2xl text-primary md:text-4xl lg:text-5xl'>
            The home of fresh products
          </h2>
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
            Learn about us
          </Button>
        </div>
      </div>
    </div>
  </MainSection>
);
