import Image from 'next/image';

import { Button } from '@/shared/ui/button/button';

import { MainSection } from '@/containers/main-section/main-section';

export const Faq = () => (
  <MainSection>
    <div className='bg-primary-50 p-8 md:p-10 xl:p-28'>
      <div className='mx-auto max-w-screen-2xl items-center text-center lg:flex lg:text-left'>
        <div className='relative  mx-auto mb-12 aspect-square	max-w-80 md:max-w-xl lg:mx-0 lg:mb-0 lg:mr-12 lg:w-6/12'>
          <Image
            fill
            alt='Picture of the author'
            quality={100}
            src='/images/hero-banner.png'
          />
        </div>
        <div className='w-full  lg:w-6/12 lg:max-w-xl'>
          <h2 className='mb-6 text-2xl md:text-4xl lg:text-5xl'>
            Order online with our simple checkout.
          </h2>
          <p className='text-primary-text mb-8'>
            Lorem Ipsum is simply dummy text of the printinsg and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500.
          </p>
          <Button
            className='text-white'
            color='primary'
            radius='md'
          >
            See our FAQ
          </Button>
        </div>
      </div>
    </div>
  </MainSection>
);
