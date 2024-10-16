import Image from 'next/image';

import {
  CONTAINER_IMG_CLS,
  CONTAINER_TEXT_CLS,
} from '@/shared/constants/classes';
import { Button } from '@/shared/ui/button/button';
import { cn } from '@/shared/utils/cn';

import { MainSection } from '@/containers/main-section/main-section';

export const CallStore = () => (
  <MainSection>
    <div className='p-8 md:p-10 xl:p-28'>
      <div className='mx-auto max-w-screen-2xl items-center text-center lg:flex lg:text-left'>
        <div className={cn(CONTAINER_TEXT_CLS)}>
          <h1 className='mb-6 text-2xl  md:text-4xl lg:text-5xl'>
            Call our store and takeaway when it suits you best.
          </h1>
          <p className='mb-8 text-primary-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500.
          </p>
          <Button
            asChild
            className='text-white'
            color='primary'
            radius='md'
          >
            <a href='tel:+612332333'>Ph. +61 233 2333</a>
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
