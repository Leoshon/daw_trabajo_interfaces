import React, { useState } from "react";
import  msgIng  from '../assets/lang/en-US.json'
import  msgEsp  from '../assets/lang/es-ES.json'
import { IntlProvider } from "react-intl";


const langContext = React.createContext();
const LangProvider = ({ children }) => {
    const [mensajes, setMensajes] = useState(msgEsp);
    const [locale, setLocale] = useState("es-ES");
    const establishLang = (lang) => {
      switch (lang) {
        case "en-US":
          setMensajes(msgIng);
          setLocale("en-US");
          break;
        case "es-ES":
          setMensajes(msgEsp);
          setLocale("es-ES");
          break;
        default:
          setMensajes(msgEsp);
          setLocale("es-US");
      }
    }
  return <langContext.Provider value={{establishLang:establishLang}}><IntlProvider locale={locale} messages={mensajes}>{children}</IntlProvider></langContext.Provider>;
};

export { langContext, LangProvider };
