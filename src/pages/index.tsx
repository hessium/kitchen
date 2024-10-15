import { About } from '@/components/about/about';
import { CallStore } from '@/components/call-store/call-store';
import { Faq } from '@/components/faq/faq';
import { Hero } from '@/components/hero/hero';
import { HowWorks } from '@/components/how-works/how-works';
import { Menu } from '@/components/menu/menu';
import { Support } from '@/components/support/support';
import { MainLayout } from '@/containers/main-layout/main-layout';

export default function Home() {
  return (
    <MainLayout meta={{ title: 'Home' }}>
      <Hero />
      <About />
      <Menu />
      <HowWorks />
      <Faq />
      <CallStore />
      <Support />
    </MainLayout>
  );
}
