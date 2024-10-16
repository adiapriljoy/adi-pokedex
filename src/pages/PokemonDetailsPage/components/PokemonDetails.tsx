import React from "react";
import StatBar from "../../../components/Customs/StatBar";
import { capitalizeFirstLetter } from "../../../utils/utility";
import { IPokemonDetails } from "../../../models/interface";

interface PokemonDetailsProps {
  pokemonDetails: IPokemonDetails | undefined;
}

const PokemonDetails = ({ pokemonDetails }: PokemonDetailsProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-4 w-full max-w-md">
      <h2 className="text-lg font-semibold dark:text-pokemonWhite mb-2">
        Details
      </h2>
      <div className="mb-4">
        <h3 className="font-medium dark:text-pokemonWhite">Types:</h3>
        <ul className="list-disc pl-5">
          {pokemonDetails?.types.map((type, index) => (
            <li key={index} className="dark:text-pokemonWhite">
              {capitalizeFirstLetter(type.type.name)}
            </li>
          ))}
        </ul>
      </div>
      <div className="dark:text-pokemonWhite mb-4">
        <h3 className="font-medium dark:text-pokemonWhite">Weight:</h3>
        <p>{pokemonDetails?.weight} hectograms</p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium dark:text-pokemonWhite">Abilities:</h3>
        <ul className="list-disc pl-5">
          {pokemonDetails?.abilities.map((ability, index) => (
            <li key={index} className="dark:text-pokemonWhite">
              {capitalizeFirstLetter(ability.ability.name)}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 w-full max-w-md">
        <h2 className="text-lg font-semibold dark:text-pokemonWhite">Stats:</h2>
        {pokemonDetails?.stats.map((stat, index) => (
          <StatBar
            key={index}
            statName={capitalizeFirstLetter(stat.stat.name)}
            baseStat={stat.baseStat}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
