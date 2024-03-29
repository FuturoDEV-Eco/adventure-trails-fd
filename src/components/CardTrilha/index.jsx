import * as PropTypes from "prop-types"

function CardTrilha({dadosTrilha}){
  return (
    <>
      <h1>{dadosTrilha.nomeTrilha}</h1>
      <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
      <img width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
    </>
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