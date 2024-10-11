import { useCallback } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { button } from '@/shared/constants/variants';
import type { ForwardComponent } from '@/shared/types/globals';
import type { ButtonProps } from '@/shared/ui/button/button';
import { cn } from '@/shared/utils/cn';

export const useButton = (
  props: ForwardComponent<HTMLButtonElement, ButtonProps>,
) => {
  const {
    asChild,
    forwardedRef,
    variant,
    color,
    isLoading,
    isIconOnly,
    isDisabled,
    radius,
    className,
    type = 'button',
    ...rest
  } = props;

  const Component = asChild ? Slot : 'button';

  const getButtonProps = useCallback(
    () => ({
      className: cn(
        button({
          color,
          isDisabled,
          isIconOnly,
          isLoading,
          radius,
          variant,
        }),
        className,
      ),
      ref: forwardedRef,
      type,
      ...rest,
    }),
    [
      color,
      isDisabled,
      isIconOnly,
      isLoading,
      radius,
      variant,
      className,
      forwardedRef,
      type,
      rest,
    ],
  );

  return { Component, getButtonProps, ...props };
};
