import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", noPadding = false }) => {
  return (
    <div className={`
      backdrop-blur-xl 
      bg-gamma-card/80 
      border border-gamma-border 
      rounded-xl 
      shadow-2xl 
      overflow-hidden
      ${noPadding ? '' : 'p-6 md:p-10'} 
      ${className}
    `}>
      {children}
    </div>
  );
};