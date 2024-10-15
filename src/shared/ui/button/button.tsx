import { forwardRef } from 'react';

import { Slottable } from '@radix-ui/react-slot';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { useButton } from '@/shared/ui/button/use-button';

export type ButtonVariant = 'solid' | 'link' | 'light';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  color?: 'default' | 'primary' | 'white';
  endContent?: ReactNode;
  isDisabled?: boolean;
  isIconOnly?: boolean;
  isLoading?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  spinner?: ReactNode;
  spinnerPlacement?: 'start' | 'end';
  startContent?: ReactNode;
  // spinnerProps?: SpinnerProps;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, forwardedRef) => {
    const {
      Component,
      spinnerPlacement,
      startContent,
      endContent,
      spinner = <></>,
      isLoading,
      isIconOnly,
      getButtonProps,
    } = useButton({
      forwardedRef,
      ...props,
    });

    return (
      <Component {...getButtonProps()}>
        {startContent}
        {isLoading && spinnerPlacement === 'start' && spinner}
        <Slottable>{isLoading && isIconOnly ? null : children}</Slottable>
        {isLoading && spinnerPlacement === 'end' && spinner}
        {endContent}
      </Component>
    );
  },
);

Button.displayName = 'Button';
