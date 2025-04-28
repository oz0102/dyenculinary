'use client'

import * as React from 'react'

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg'
  }
>(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary"
  }
  
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md"
  }
  
  const combinedClassName = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  ].filter(Boolean).join(' ')
  
  return (
    <button
      className={combinedClassName}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
