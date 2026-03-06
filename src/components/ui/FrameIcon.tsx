"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";

const frameIconVariants = cva(
  "inline-flex items-center justify-center rounded shrink-0 text-[var(--frame-icon-color)]",
  {
    variants: {
      variant: {
        primary:
          "bg-action-primary-default [--frame-icon-color:var(--action-white)]",
        secondary:
          "bg-surface-secondary [--frame-icon-color:var(--action-white)]",
        tertiary:
          "bg-surface-tertiary [--frame-icon-color:var(--action-white)]",
        neutral:
          "bg-surface-neutral [--frame-icon-color:var(--text-primary)]",
      },
      size: {
        sm: "h-8 w-8 p-1.5 [&_svg]:!size-5",
        md: "h-10 w-10 p-2 [&_svg]:!size-6",
        lg: "h-12 w-12 p-2.5 [&_svg]:!size-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface FrameIconProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof frameIconVariants> {
  name: IconName;
}

const FrameIcon = React.forwardRef<HTMLDivElement, FrameIconProps>(
  ({ name, variant, size, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="img"
        aria-hidden
        className={cn(frameIconVariants({ variant, size }), className)}
        {...props}
      >
        <Icon name={name} />
      </div>
    );
  }
);

FrameIcon.displayName = "FrameIcon";

export { FrameIcon, frameIconVariants };
