"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants that read CSS variables from globals.css
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--primary-fg)] hover:opacity-90 border-transparent",
        outline:
          "bg-[var(--bg)] text-[var(--fg)] hover:opacity-90 border-card",
        ghost:
          "bg-transparent text-[var(--fg)] hover:bg-[color-mix(in_oklab,var(--fg)_10%,var(--bg))] border-transparent",
        link:
          "text-[var(--primary)] underline-offset-4 hover:underline border-transparent bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
