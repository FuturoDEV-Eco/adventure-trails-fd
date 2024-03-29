import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){
  return (
    <div className="card_container">
      <img className="card_imagem" width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
      <h1>{dadosTrilha.nomeTrilha}</h1>
      <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
    </div>
  )
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
    tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired
  })
}

// aqui vai os prop-types

export default CardTrilha;