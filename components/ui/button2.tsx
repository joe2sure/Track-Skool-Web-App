import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const button2Variants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const Button2 = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof button2Variants> & {
      asChild?: boolean
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return <Comp ref={ref} data-slot="button" className={cn(button2Variants({ variant, size, className }))} {...props} />
})
Button2.displayName = "Button2"

export default Button2
export { button2Variants }






// 'use client';

// interface Button2Props {
//   children: React.ReactNode;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
//   size?: 'sm' | 'md' | 'lg';
//   disabled?: boolean;
//   className?: string;
//   type?: 'button' | 'submit' | 'reset';
// }

// export default function Button2({
//   children,
//   onClick,
//   variant = 'primary',
//   size = 'md',
//   disabled = false,
//   className = '',
//   type = 'button'
// }: Button2Props) {
//   const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer';
  
//   const variants = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
//     secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500',
//     accent: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-2 focus:ring-amber-400',
//     outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500',
//     ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400'
//   };
  
//   const sizes = {
//     sm: 'px-3 py-1.5 text-sm',
//     md: 'px-4 py-2 text-sm',
//     lg: 'px-6 py-3 text-base'
//   };
  
//   const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
//     >
//       {children}
//     </button>
//   );
// }