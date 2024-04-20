/* eslint-disable react/prop-types */
/**
 * PASSOS PARA CRIAR UM CONTEXTO
 *
 * 1 - [x] - IMPORTE O createContext DO REACT
 * 2 - [x] - CRIAR A VARIÁVEL DO CONTEXTO
 * 3 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
 *
 * 4 - [x] - CRIE A VARIÁVEL DO PROVIDER
 * 5 - [x] - RECEBA A PROP CHILDREN
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
 * 8 - [x] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
 *
 * 9 - [] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
 * 10 - [] - IMPORTE O useContext DO REACT
 * 11 - [] - RECEBA OS DADOS GLOBAIS USANDO O useContext
 */

import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
 const [dados, isLoading] = useFetch("/dados.json");
 const [trilhas, setTrilhas] = useState([]);

 useEffect(() => {
  if (!!dados && !isLoading) {
   setTrilhas(dados.trilhas);
  }
 }, [dados]);

 function addTrail(trailData) {
  setTrilhas((t) => [...t, trailData]);
 }

 return (
  <TrilhasContext.Provider value={{ trilhas, setTrilhas, isLoading, addTrail }}>
   {children}
  </TrilhasContext.Provider>
 );
};
