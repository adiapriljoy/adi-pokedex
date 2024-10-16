import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useCaptureForm = (pokemonId: number) => {
    const [nickname, setNickname] = useState("");
    const [dateCaptured, setDateCaptured] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isCaptured, setIsCaptured] = useState(false);

    useEffect(() => {
        const existingCaptures = localStorage.getItem("capturedPokemon");
        if (existingCaptures) {
            const capturedPokemonArray = JSON.parse(existingCaptures);
            const alreadyCaptured = capturedPokemonArray.some(
                (capture: { pokemonId: number }) => capture.pokemonId === pokemonId
            );
            setIsCaptured(alreadyCaptured);
        }
    }, [pokemonId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmit(true);

        const existingCaptures = localStorage.getItem("capturedPokemon");
        const capturedPokemonArray = existingCaptures
            ? JSON.parse(existingCaptures)
            : [];
        const newCapture = {
            pokemonId,
            nickname,
            dateCaptured,
        };
        capturedPokemonArray.push(newCapture);
        localStorage.setItem(
            "capturedPokemon",
            JSON.stringify(capturedPokemonArray)
        );

        toast.success("Pokémon tagged as captured!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false,
            theme: "light",
        });

        setNickname("");
        setDateCaptured("");
        setIsSubmit(false);
        setIsCaptured(true);
    };

    return {
        nickname,
        setNickname,
        dateCaptured,
        setDateCaptured,
        isSubmit,
        handleSubmit,
        isCaptured,
    };
};

export default useCaptureForm;
