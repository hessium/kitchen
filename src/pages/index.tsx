import Link from 'next/link';

import { LINKS } from '@/shared/constants/links';

import { MainLayout } from '@/containers/main-layout/main-layout';

export default function Home() {
  return (
    <MainLayout meta={{ title: 'Home' }}>
      <Link href={LINKS.about}>К About</Link>
    </MainLayout>
  );
}
