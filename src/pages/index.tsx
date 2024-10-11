import { Hero } from '@/components/hero/hero';
import { MainLayout } from '@/containers/main-layout/main-layout';

export default function Home() {
  return (
    <MainLayout meta={{ title: 'Home' }}>
      <Hero />
    </MainLayout>
  );
}
