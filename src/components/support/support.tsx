import Image from 'next/image';

import { CONTAINER_CLS } from '@/shared/constants/classes';
import { Button } from '@/shared/ui/button/button';
import { cn } from '@/shared/utils/cn';

import { MainSection } from '@/containers/main-section/main-section';

export const Support = () => (
  <MainSection>
    <div className='bg-primary-50 p-8 md:p-10 xl:p-28'>
      <div className={cn(CONTAINER_CLS, 'lg:text-left')}>
        <div className='relative mx-auto aspect-square w-full max-w-96 lg:mx-0 lg:w-[calc(50%-1.25rem)] lg:max-w-2xl'>
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
