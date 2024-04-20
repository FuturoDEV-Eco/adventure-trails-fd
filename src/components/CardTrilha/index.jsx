import * as PropTypes from "prop-types";
import "./style.css";
import { Chip, Rating } from "@mui/material";

function CardTrilha({ dadosTrilha }) {
 return (
  <div className="card_container">
   <div
    style={{ backgroundImage: `url(${dadosTrilha.urlImagem})` }}
    className="card_imagem"
    alt="imagem trilha"
   />
   <div className="card_data_container">
    <h1>
     {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}
    </h1>

    <h4>Por: {dadosTrilha.nomeUsuario}</h4>

    <div className="duracao_trajeto">
     <p>Duração: {dadosTrilha.duracao}</p>
     <p>Trajeto: {dadosTrilha.trajeto}</p>
    </div>

    <div className="dificuldade_tipo">
     <Chip label={dadosTrilha.dificuldade} />
     <Chip label={dadosTrilha.tipo} />
    </div>

    <div>
     <Rating name="read-only" value={4} readOnly />
    </div>
   </div>
  </div>
 );
}

// configuração das props types
CardTrilha.propTypes = {
 dadosTrilha: PropTypes.exact({
  nomeTrilha: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
  duracao: PropTypes.number.isRequired,
  trajeto: PropTypes.number.isRequired,
  dificuldade: PropTypes.string.isRequired,
  // enum
  tipo: PropTypes.oneOf(["caminhada / trekking", "ciclismo"]),
  nomeUsuario: PropTypes.string.isRequired,
  urlImagem: PropTypes.string.isRequired
 })
};

// aqui vai os prop-types

export default CardTrilha;
