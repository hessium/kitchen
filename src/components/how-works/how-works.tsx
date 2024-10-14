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
      <div className='bg-primary-50 p-4 md:p-10 xl:p-28'>
        <div className='mx-auto flex max-w-screen-2xl flex-col items-center text-center'>
          <h2 className='mb-6 text-4xl text-primary'>How it works.</h2>
          <div className='flex items-center gap-32'>
            {worksList.map((el) => (
              <div
                key={el.name}
                className='relative flex w-1/3 flex-col
                items-center gap-3'
              >
                <div
                  className='before:z-1 relative aspect-[333/267] w-full
                before:absolute before:inset-y-1/2 before:-right-20 before:block
                before:h-px before:w-1/5	 before:bg-gray-400'
                >
                  <Image
                    fill
                    alt={el.name}
                    quality={100}
                    src={el.image}
                  />
                </div>
                <div>{el.name}</div>
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainSection>
  );
};
