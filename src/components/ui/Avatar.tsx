"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  size?: number;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = "", size = 50, className, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);
    const showImage = Boolean(src && !imgError);

    return (
      <div
        ref={ref}
        role="img"
        aria-label={alt || (showImage ? "Foto do perfil" : "Sem foto")}
        className={cn(
          "inline-flex items-center justify-center overflow-hidden rounded-full bg-action-primary-default text-action-white shrink-0",
          className,
        )}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
        {...props}
      >
        {showImage ? (
          <img
            src={src ?? ""}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <Icon
            name="User"
            size={Math.round(size * 0.6)}
            className="text-action-white"
            aria-hidden
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };
