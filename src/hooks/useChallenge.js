import { ChallengesContext } from "contexts/ChallengesContext";
import { useContext } from "react";

export function useChallenge() {
  const value = useContext(ChallengesContext);
  return value;
}
