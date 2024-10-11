import Link from 'next/link';

import { LINKS } from '@/shared/constants/links';

import { MainLayout } from '@/containers/main-layout/main-layout';

export default function Home() {
  return (
    <MainLayout meta={{ title: 'Home' }}>
      <Link href={LINKS[0].path}>{LINKS[0].name}</Link>
    </MainLayout>
  );
}
