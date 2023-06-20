import { I18nContext } from "../contexts/I18nContext";
import { useContext } from "react";

export function useI18n() {
  const value = useContext(I18nContext);
  return value;
}
