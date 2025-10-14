import { RouletteContext } from "@/contexts/RouletteContext";
import { useContext } from "react";

export const useRoulette = () => useContext(RouletteContext);
