import * as React from "react"
import { cn } from "@/lib/utils"

const Card2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-950 dark:text-gray-50 shadow-sm",
      className,
    )}
    {...props}
  />
))
Card2.displayName = "Card2"

const Card2Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
Card2Header.displayName = "Card2Header"

const Card2Title = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
Card2Title.displayName = "Card2Title"

const Card2Description = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-500 dark:text-gray-400", className)} {...props} />
  ),
)
Card2Description.displayName = "Card2Description"

const Card2Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
Card2Content.displayName = "Card2Content"

const Card2Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
Card2Footer.displayName = "Card2Footer"

export default Card2
export { Card2Header, Card2Title, Card2Description, Card2Content, Card2Footer }





// 'use client';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   padding?: 'sm' | 'md' | 'lg';
//   shadow?: 'sm' | 'md' | 'lg';
// }

// export default function Card({ 
//   children, 
//   className = '', 
//   padding = 'md',
//   shadow = 'md'
// }: CardProps) {
//   const paddingClasses = {
//     sm: 'p-4',
//     md: 'p-6',
//     lg: 'p-8'
//   };
  
//   const shadowClasses = {
//     sm: 'shadow-sm',
//     md: 'shadow-md',
//     lg: 'shadow-lg'
//   };
  
//   return (
//     <div className={`bg-white rounded-xl ${shadowClasses[shadow]} ${paddingClasses[padding]} ${className}`}>
//       {children}
//     </div>
//   );
// }