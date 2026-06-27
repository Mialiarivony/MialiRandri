import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (fr: string, en: string) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const value: Ctx = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === "fr" ? "en" : "fr")),
    t: (fr, en) => (lang === "fr" ? fr : en),
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
