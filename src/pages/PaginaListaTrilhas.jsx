import CardTrilha from "../components/CardTrilha";
import { useContext } from "react";
import {TrilhasContext} from "../context/TrilhasContext"

function PaginaListaTrilhas() {
  
  const {trilhas, isLoading} = useContext(TrilhasContext)

  return (
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>
      {Array.isArray(trilhas) && !isLoading ? (
          trilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))
        ) : (
          <span>Não há dados disponíveis</span>
        )
      }
    </div>
  );
}

export default PaginaListaTrilhas;
