import Image from 'next/image';

import { Button } from '@/shared/ui/button/button';

import { MainSection } from '@/containers/main-section/main-section';

export const Support = () => (
  <MainSection>
    <div className='bg-primary-50 p-8 md:p-10 xl:p-28'>
      <div className='mx-auto max-w-screen-2xl items-center text-center lg:flex lg:items-stretch lg:text-left'>
        <div className='relative mx-auto mb-12 aspect-square max-w-96 lg:mx-0  lg:mb-0 lg:mr-12 lg:w-[calc(50%-1.25rem)] lg:max-w-2xl'>
          <Image
            fill
            alt='Picture of the author'
            quality={100}
            src='/images/support.jpg'
          />
        </div>
        <div className='mx-auto aspect-square max-w-96 flex-col bg-primary p-8 flex-center lg:mx-0 lg:w-[calc(50%-1.25rem)] lg:max-w-2xl lg:text-left'>
          <h1 className='mb-8 text-2xl text-white md:text-4xl lg:text-5xl'>
            Support good food and local business. Order Now
          </h1>
          <Button
            className='text-primary lg:mr-auto'
            color='white'
            radius='md'
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  </MainSection>
);
