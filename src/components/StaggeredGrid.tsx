import React from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  itemClassName = '',
  staggerDelay = 150,
}) => {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, staggerDelay);

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            visibleItems[index]
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          } ${itemClassName}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredGrid;