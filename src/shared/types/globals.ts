import type { Metadata } from 'next';

export type NonNullableKeys<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type AppMeta<T = NonNullableKeys<Metadata>> = T & {
  canonical?: string;
  image?: string;
};

export type Default<
  Initial,
  Alternative = undefined,
> = Alternative extends undefined ? Initial : Alternative;
