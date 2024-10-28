import styled from "styled-components";
import CadastrarPaciente from "./components/Informações_Adicionais";
import FormContainer from "./components/formulario";
const Atendimento = () => {
  return (
    <div>
      <Container>
        <CadastrarPaciente />
        <FormContainer />
      </Container>
    </div>
  );
};

const Container = styled.div`
  background-color: #091057;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 1440px) {
    /* Exemplo de media query */
    min-height: 1440px;
  }
`;

export default Atendimento;
