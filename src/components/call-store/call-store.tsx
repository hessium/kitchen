import Image from 'next/image';

import { Button } from '@/shared/ui/button/button';

import { MainSection } from '@/containers/main-section/main-section';

export const CallStore = () => (
  <MainSection>
    <div className='p-8 md:p-10 xl:p-28'>
      <div className='mx-auto max-w-screen-2xl items-center text-center lg:flex lg:text-left'>
        <div className='mb-12 w-full lg:mb-0 lg:mr-12 lg:w-6/12 lg:max-w-xl'>
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
        <div className='relative	mx-auto aspect-square max-w-80 md:max-w-xl lg:mx-0 lg:w-6/12'>
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
