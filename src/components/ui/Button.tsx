import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap rounded transition-[color,background-color,border-color] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-action-primary-default text-action-white hover:bg-action-primary-hover",
        secondary:
          "border border-brand-purple-800 bg-transparent text-brand-purple-700 hover:bg-action-primary-default hover:text-action-white hover:border-brand-purple-700",
        tertiary:
          "bg-transparent text-brand-purple-700 hover:bg-brand-purple-100",
      },
      size: {
        small:
          "h-6 min-h-6 p-1 text-xs rounded [&_svg]:size-4",
        medium:
          "h-9 min-h-9 p-2 text-sm rounded [&_svg]:size-5",
        large:
          "h-11 min-h-11 p-3 text-base rounded [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
