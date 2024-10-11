import type { Metadata } from 'next';
import type { Ref } from 'react';

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

export type ForwardComponent<Element, Props> = Props & {
  forwardedRef?: Ref<Element>;
};
