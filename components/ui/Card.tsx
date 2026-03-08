import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div 
      className={`
        bg-white rounded-2xl border border-gray-100 p-6 
        ${hoverable ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-100' : 'shadow-sm'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
