"use client"

import React, { JSX, useState } from 'react';
import Card from './card';

interface CardData {
  title: string;
}

const cardsData: CardData[] = [
  { title: 'Card 1' },
  { title: 'Card 2' },
  { title: 'Card 3' },
  { title: 'Card 4' },
];

export default function CardGrid(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex space-x-4 p-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          expanded={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}
