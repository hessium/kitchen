import { tv } from 'tailwind-variants';

export const button = tv({
  base: [
    'z-0',
    'group/button',
    'gap-2',
    'cursor-pointer',
    'transitiona-all',
    'duration-300',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'box-border',
    'appearance-none',
    'outline-none',
    'select-none',
    'whitespace-nowrap',
    'min-w-fit',
    'w-fit',
    'h-10',
    'font-normal',
    'subpixel-antialiased',
    'overflow-hidden',
    'tap-highlight-transparent',
  ],
  compoundVariants: [
    {
      class: 'bg-default hover:bg-default/80',
      color: 'default',
      variant: 'solid',
    },
    {
      class: 'bg-transparent hover:bg-default/70',
      color: 'default',
      variant: 'light',
    },
    {
      class: 'hover:underline',
      color: 'default',
      variant: 'link',
    },
    {
      class: 'bg-primary hover:bg-primary/80',
      color: 'primary',
      variant: 'solid',
    },
    {
      class: 'bg-transparent hover:bg-primary/20 hover:text-primary',
      color: 'primary',
      variant: 'light',
    },
    {
      class: 'hover:underline hover:text-primary',
      color: 'primary',
      variant: 'link',
    },
  ],
  defaultVariants: {
    color: 'default',
    isDisabled: false,
    isIconOnly: false,
    isLoading: false,
    radius: 'full',
    variant: 'solid',
  },
  variants: {
    color: {
      default: '',
      primary: '',
    },
    isDisabled: {
      true: 'opacity-disabled pointer-events-none',
    },
    isIconOnly: {
      false: 'px-4',
      true: '!gap-0 w-10',
    },
    isLoading: {
      true: 'opacity-disabled pointer-events-none',
    },
    radius: {
      full: 'rounded-full',
      lg: 'rounded-lg',
      md: 'rounded-md',
      none: 'rounded-none',
      sm: 'rounded-sm',
    },
    variant: {
      light: '',
      link: '',
      solid: '',
    },
  },
});
