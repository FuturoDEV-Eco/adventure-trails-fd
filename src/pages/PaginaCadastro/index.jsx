import { useForm } from "react-hook-form";
import { FormComponent, InputWrapper, PageTitle } from "./styles";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import { useNavigate } from "react-router-dom";

// PASSO 1 - Importar o hook useForm e em sequência desestruturar o retorno para utilizar a função register
// PASSO 2 - Registrar os campos incluindo a validação
// PASSO 3 - Criar a função de submissão
// PASSO 4 - Capturar a função handleSubmit do retorno do hook useForm;
// PASSO 5 - Passar o valor da prop onSubmit do form como a handleSubmit e copmo parâmetro da handleSubmit a função personalizada de envio do formulário (nesse caso sendForm);

function PaginaCadastroTrilha() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();
 const { addTrail } = useContext(TrilhasContext);
 const navigate = useNavigate();

 function sendForm(formValue) {
  console.log(formValue);

  addTrail({
   ...formValue,
   duracao: Number(formValue.duracao),
   trajeto: Number(formValue.trajeto)
  });

  navigate("/trilhas");
 }

 return (
  <div className="container">
   <PageTitle>Cadastro de nova trilha</PageTitle>

   <FormComponent onSubmit={handleSubmit(sendForm)}>
    {/* Nome da trilha: campo de texto obrigatório com limite de 100 caracteres; */}
    <InputWrapper>
     <label htmlFor="nomeTrilha">Nome da trilha</label>
     <input
      type="text"
      {...register("nomeTrilha", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 100,
        message: "Este campo aceita no máximo 100 caracteres"
       }
      })}
     />
     {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
    </InputWrapper>

    {/* Duração estimada: campo numérico obrigatório */}
    <InputWrapper>
     <label htmlFor="duracao">Duração estimada (em minutos)</label>
     <input
      type="number"
      {...register("duracao", {
       required: "Este campo é obrigatório"
      })}
     />
     {errors?.duracao && <p>{errors.duracao?.message}</p>}
    </InputWrapper>

    {/* Trajeto: campo numérico obrigatório; */}
    <InputWrapper>
     <label htmlFor="trajeto">Trajeto (km)</label>
     <input
      type="number"
      {...register("trajeto", {
       required: "Este campo é obrigatório"
      })}
     />
    </InputWrapper>

    {/* Cidade: campo de texto obrigatório com limite de 60 caracteres;; */}
    <InputWrapper>
     <label htmlFor="cidade">Cidade</label>
     <input
      type="text"
      {...register("cidade", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 60,
        message: "Este campo aceita no máximo 60 caracteres"
       }
      })}
     />
    </InputWrapper>

    {/* Estado:  campo de texto obrigatório com limite de 2 caracteres; */}
    <InputWrapper>
     <label htmlFor="estado">Estado</label>
     <input
      type="text"
      {...register("estado", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 2,
        message: "Este campo aceita no máximo 2 caracteres"
       }
      })}
     />
    </InputWrapper>

    {/* Nome completo usuário:  campo de texto; */}
    <InputWrapper>
     <label htmlFor="nomeUsuario">Nome completo do usuário</label>
     <input
      type="text"
      {...register("nomeUsuario", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 60,
        message: "Este campo aceita no máximo 60 caracteres"
       }
      })}
     />
    </InputWrapper>

    {/* Dificuldade:  campo de select. */}
    <InputWrapper>
     <label htmlFor="dificuldade">Dificuldade</label>
     <select
      {...register("dificuldade", {
       required: "Este campo é obrigatório"
      })}>
      <option value="">Selecione uma dificuldade</option>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermediário">Intermediário</option>
      <option value="Difícil">Difícil</option>
     </select>
    </InputWrapper>

    {/* Tipo de trilha:  campo de select; */}
    <InputWrapper>
     <label htmlFor="tipo">Tipo de trilha</label>
     <select
      {...register("tipo", {
       required: "Este campo é obrigatório"
      })}>
      <option value="">Selecione o tipo da trilha</option>
      <option value="caminhada / trekking">Caminhada/Trekking</option>
      <option value="ciclismo">Ciclismo</option>
     </select>
    </InputWrapper>

    {/* URL imagem da trilha:  campo de texto; */}
    <InputWrapper>
     <label htmlFor="urlImagem">URL imagem da trilha</label>
     <input
      type="text"
      {...register("urlImagem", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 300,
        message: "Este campo aceita no máximo 60 caracteres"
       }
      })}
     />
    </InputWrapper>

    <div>
     <button type="submit">Cadastrar</button>
     <button>Voltar</button>
    </div>
   </FormComponent>
  </div>
 );
}

export default PaginaCadastroTrilha;
