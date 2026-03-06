"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const metacriticScoreVariants = cva(
  "inline-flex items-center justify-center rounded-full p-1 text-action-white font-normal shrink-0",
  {
    variants: {
      variant: {
        good: "bg-surface-success",
        medium: "bg-surface-warning",
        bad: "bg-surface-error",
      },
    },
    defaultVariants: {
      variant: "good",
    },
  }
);

export type MetacriticScoreVariant = "good" | "medium" | "bad";

export function getMetacriticVariant(score: number): MetacriticScoreVariant {
  if (score >= 75) return "good";
  if (score >= 50) return "medium";
  return "bad";
}

export interface MetacriticScoreProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof metacriticScoreVariants> {
  score: number;
  variant?: MetacriticScoreVariant;
  size?: number;
}

const MetacriticScore = React.forwardRef<HTMLDivElement, MetacriticScoreProps>(
  (
    { score, variant, size = 80, className, ...props },
    ref
  ) => {
    const resolvedVariant = variant ?? getMetacriticVariant(score);
    const displayScore = Math.round(Math.max(0, Math.min(100, score)));

    return (
      <div
        ref={ref}
        role="img"
        aria-label={`Nota: ${displayScore} de 100`}
        className={cn(
          metacriticScoreVariants({ variant: resolvedVariant }),
          className
        )}
        style={{
          width: size,
          height: size,
          minWidth: size,
          minHeight: size,
          fontSize: size * 0.5,
          lineHeight: 1.17,
        }}
        {...props}
      >
        {displayScore}
      </div>
    );
  }
);

MetacriticScore.displayName = "MetacriticScore";

export { MetacriticScore, metacriticScoreVariants };
