import Link from 'next/link';

import { Button } from '@/shared/ui/button/button';

import { About } from '@/components/about/about';
import { Hero } from '@/components/hero/hero';
import { HowWorks } from '@/components/how-works/how-works';
import { MainLayout } from '@/containers/main-layout/main-layout';

export default function Home() {
  return (
    <MainLayout meta={{ title: 'Home' }}>
      <Hero />
      <About />
      <HowWorks />

      <div className='flex flex-col gap-6'>
        <Button>Solid</Button>
        <Button variant='light'>Light</Button>
        <Button variant='link'>Link</Button>

        <Button color='primary'>Solid</Button>
        <Button
          color='primary'
          variant='light'
        >
          Light
        </Button>
        <Button
          color='primary'
          variant='link'
        >
          Link
        </Button>

        <Button asChild>
          <Link href='/about'>About (asChild)</Link>
        </Button>
      </div>
    </MainLayout>
  );
}
