import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface CardProps {
  title: string;
  expanded?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  expanded = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        width: expanded ? '300px' : '150px',
        flexGrow: expanded ? 2 : 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [expanded]);

  return (
    <div
      ref={cardRef}
      className="bg-white text-black shadow-md rounded-md cursor-pointer overflow-hidden p-4 flex items-center justify-center transition-all duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
};

export default Card;
