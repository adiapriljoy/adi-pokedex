import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import useCaptureForm from "../../../hooks/useCaptureForm";
import { IPokemonCapture } from "../../../models/interface";

interface CaptureProps {
  pokemonId: number;
}

const CaptureForm = ({ pokemonId }: CaptureProps) => {
  const {
    nickname,
    setNickname,
    dateCaptured,
    setDateCaptured,
    isSubmit,
    handleSubmit,
    isCaptured,
  } = useCaptureForm(pokemonId);

  useEffect(() => {
    if (isCaptured) {
      const capturedData = JSON.parse(
        localStorage.getItem("capturedPokemon") || "[]"
      ).find((capture: IPokemonCapture) => capture.pokemonId === pokemonId);

      if (capturedData) {
        setNickname(capturedData.nickname || "");
        setDateCaptured(capturedData.dateCaptured || "");
      }
    }
  }, [isCaptured, pokemonId, setNickname, setDateCaptured]);

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <ToastContainer />
      <div className="mb-4">
        <label
          className="block text-sm font-semibold dark:text-pokemonWhite"
          htmlFor="nickname"
        >
          Nickname:
        </label>
        <input
          type="text"
          id="nickname"
          value={nickname || ""}
          onChange={(e) => setNickname(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full"
          placeholder="Enter a nickname"
          required
          disabled={isCaptured}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-semibold dark:text-pokemonWhite"
          htmlFor="dateCaptured"
        >
          Date Captured:
        </label>
        <input
          type="date"
          id="dateCaptured"
          value={dateCaptured || ""}
          onChange={(e) => setDateCaptured(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full"
          required
          disabled={isCaptured}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmit || isCaptured}
        className={`bg-pokemonRed text-white font-semibold py-2 rounded w-full hover:bg-red-600 focus:outline-none ${
          isSubmit || isCaptured ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Tag as Captured
      </button>
      {isCaptured && (
        <p className="text-red-500">This Pokémon is already captured!</p>
      )}
    </form>
  );
};

export default CaptureForm;
