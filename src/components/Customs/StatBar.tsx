import React from "react";

interface StatBarProps {
  statName: string;
  baseStat: number;
}

const StatBar: React.FC<StatBarProps> = ({ statName, baseStat }) => {
  const barWidth = `${baseStat * 1.5}px`;

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="font-semibold dark:text-pokemonWhite">{statName}</span>
      </div>
      <div
        className="bg-gray-300 dark:bg-gray-600 rounded h-4"
        style={{ width: barWidth }}
      />
    </div>
  );
};

export default StatBar;
