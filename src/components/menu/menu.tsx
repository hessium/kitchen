import Image from 'next/image';

import { Button } from '@/shared/ui/button/button';

import { MainSection } from '@/containers/main-section/main-section';

export const Menu = () => {
  const menuList = [
    {
      image: '/images/burger.jpg',
      name: 'Burger Dreams',
      price: '9.20',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
    {
      image: '/images/burger.jpg',
      name: 'Burger Dreams 2',
      price: '9.20',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
    {
      image: '/images/burger.jpg',
      name: 'Burger Dreams 3',
      price: '9.20',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
    {
      image: '/images/burger.jpg',
      name: 'Burger Dreams 4',
      price: '9.20',
      text: 'Easily adapt your menu using the webflow CMS and allow customers to browse your items.',
    },
  ];

  if (!menuList) return null;

  return (
    <MainSection>
      <div className='bg-primary-50 p-8 md:p-10 xl:p-28'>
        <div className='mx-auto max-w-screen-2xl text-center lg:gap-12'>
          <h2 className='mb-6 text-2xl text-primary md:text-4xl lg:text-5xl'>
            How it works.
          </h2>
          <div className='flex flex-col flex-wrap items-stretch justify-center gap-10 md:flex-row'>
            {menuList.map((el) => (
              <div
                key={el.name}
                className='relative flex w-full max-w-[580px] items-center gap-3 rounded-md border border-primary bg-white p-4
                lg:w-[calc(50%-1.25rem)] lg:p-8 '
              >
                <div className='item__img relative mr-4 aspect-square w-24 min-w-24 xl:w-32 xl:min-w-32'>
                  <Image
                    fill
                    alt={el.name}
                    quality={100}
                    src={el.image}
                  />
                </div>
                <div className='flex flex-col'>
                  <div className='mb-4 flex-center'>
                    <div className='text-xl'>{el.name}</div>
                    <div className='ml-auto text-primary'>$ {el.price} USD</div>
                  </div>
                  <p className='mb-2 text-left text-sm text-primary-text xl:text-base'>
                    {el.text}
                  </p>
                  <div className='flex items-stretch'>
                    <div className='relative mr-4  flex-center'>
                      <input
                        className='w-16 rounded-md bg-gray-300 px-4 py-2 text-center leading-6'
                        type='number'
                      />
                    </div>
                    <Button
                      color='primary'
                      radius='md'
                    >
                      Add to card
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainSection>
  );
};
