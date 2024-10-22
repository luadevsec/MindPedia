import styled from "styled-components";
import Textos from "./components/Letras";
import PatoInicio from "./components/Pato_design";
import BotaoInicio from "./components/button";

const TelaInicio = () => {
  return (
    <div>
      <Countainer>
        <Textos />
        <PatoInicio />
        <BotaoInicio />
      </Countainer>
    </div>
  );
};

const Countainer = styled.div`
  background-color: #faf6ed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 1440px;
  width: 2560px;
  position: relative;
`;

export default TelaInicio;
