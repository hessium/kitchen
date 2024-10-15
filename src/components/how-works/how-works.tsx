import Image from 'next/image';

import { MainSection } from '@/containers/main-section/main-section';

export const HowWorks = () => {
  const worksList = [
    {
      image: '/images/work-item-1.png',
      name: 'Adapt your menu items',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
    {
      image: '/images/work-item-2.png',
      name: 'Accept online orders & takeout',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
    {
      image: '/images/work-item-3.png',
      name: 'Manage delivery or takeout',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
  ];

  if (!worksList) return null;

  return (
    <MainSection>
      <div className='p-4 md:p-10 xl:p-28'>
        <div className='mx-auto flex max-w-screen-2xl flex-col items-center text-center'>
          <h2 className='mb-6 text-2xl text-primary md:text-4xl lg:text-5xl'>
            Browse our menu
          </h2>
          <p className='text-primary-text mb-6'>
            Use our menu to place an order online, or phone our store to place a
            pickup order. Fast and fresh food.
          </p>
          <div className='flex flex-col items-center gap-10 md:flex-row lg:gap-32'>
            {worksList.map((el) => (
              <div
                key={el.name}
                className='w relative flex w-80 flex-col items-center
                gap-3 md:w-1/3'
              >
                <div className='item__img before:z-1 relative aspect-[333/267] w-full'>
                  <Image
                    fill
                    alt={el.name}
                    quality={100}
                    src={el.image}
                  />
                </div>
                <h3 className='text-xl'>{el.name}</h3>
                <p className='text-primary-text'>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainSection>
  );
};
