// components/ScenarioCard.tsx
import React from 'react';

interface ScenarioCardProps {
  title: string;
  image: string;
  alt: string;
  howItWorks: string;
  index: number;
  bg?: string;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({
  title,
  image,
  alt,
  howItWorks,
  index,
  bg = '',
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-20 p-6 ${bg} justify-between`}
    >
      <img
        src={image}
        alt={alt}
        className="w-full md:w-1/2 shadow"
      />
      <div className="md:w-1/2">
        <h4 className="text-2xl  md:text-4xl font-bold leading-relaxed ">{title}</h4>
        <p className="text-2xl md:text-3xl text-header font-semibold mt-8">How it Works:</p>
        <p className="text-lg md:text-2xl mt-8 text-gray-800 font-light">{howItWorks}</p>
      </div>
    </div>
  );
};

export default ScenarioCard;

  