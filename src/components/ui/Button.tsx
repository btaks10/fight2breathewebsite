'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'ombre';
  size?: 'sm' | 'default' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  className = '',
  external = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-[#6B2D5C] text-white hover:bg-[#5D2751] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md shadow-md focus:ring-[#6B2D5C]',
    secondary: 'bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10 focus:ring-white',
    ghost: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white',
    dark: 'bg-[#D050B0] text-white hover:bg-[#E060C0] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md focus:ring-[#D050B0]',
    ombre: 'ombre-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md focus:ring-[#D48AE0]',
  };

  const sizes = {
    sm: 'py-2.5 px-6 text-sm rounded-full',
    default: 'py-3.5 px-10 text-base rounded-full',
    lg: 'py-4 px-12 text-lg rounded-full',
  };

  const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
