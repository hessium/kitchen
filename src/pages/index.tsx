import { cn } from '@/shared/utils/cn';

import { MainLayout } from '@/containers/main-layout/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <div className={cn('text-sm')}>App</div>
    </MainLayout>
  );
}
