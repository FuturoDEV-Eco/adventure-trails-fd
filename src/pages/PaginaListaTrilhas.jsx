import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CardTrilha from "../components/CardTrilha";

function PaginaListaTrilhas() {
  const [dados, isLoading] = useFetch("/dados.json");
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if (!!dados) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);

  return (
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>
      {Array.isArray(trilhas) &&
        trilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))}
    </div>
  );
}

export default PaginaListaTrilhas;
