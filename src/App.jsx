import CardTrilha from "./components/CardTrilha";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeContextProvider } from "./context/ThemeContext";


function App() {
  const [dados, isLoading] = useFetch("../data/dados.json");
  const [trilhas, setTrilhas] = useState([]);
  
  useEffect(() => {
    if (!!dados) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);
  
  return (
    <ThemeContextProvider>
      <Header />
      <div className="container">
        <h1 className="titulo">Explore trilhas incríveis</h1>
        {Array.isArray(trilhas) &&
          trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
