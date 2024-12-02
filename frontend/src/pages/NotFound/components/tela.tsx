import styled from "styled-components";
import BotaoBack from "./botao";
import TextNotFound from "./textos";
import Personagem from "./pato";
const Tela = () => {
  return (
    <div>
      <Container>
        <BotaoBack />
        <TextNotFound />
        <Personagem />
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 1440px;
  height: 1080px;
  position: relative;
  background: #ca0000;
`;

export default Tela;
