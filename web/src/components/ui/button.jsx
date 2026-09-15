import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-dark shadow-md hover:shadow-lg',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg',
        accent: 'bg-accent text-accent-foreground hover:bg-accent-orange font-bold',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'hover:bg-accent/10 text-primary hover:text-primary-dark shadow-none',
        link: 'text-primary underline-offset-4 hover:underline shadow-none',
      },
      size: {
        default: 'h-12 px-6 text-sm font-semibold',
        sm: 'h-12 px-4 text-xs sm:text-sm font-medium',
        lg: 'h-12 px-8 text-base font-bold',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Standardized reusable button component with uniform height across all variants
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
