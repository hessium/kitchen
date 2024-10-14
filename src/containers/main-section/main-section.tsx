import type { PropsWithChildren } from 'react';

interface MainSectionProps extends PropsWithChildren {}

export const MainSection = ({ children }: MainSectionProps) => (
  <section>{children}</section>
);
