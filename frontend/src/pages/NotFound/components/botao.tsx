import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BotaoContainer = styled.div`
  button {
    background-color: #4c81f4;
    border-radius: 50px;
    height: 100px;
    left: 1500px;
    position: relative;
    top: 620px;
    width: 374px;
    font-size: 32px;
    font-family: Poppins;
    font-weight: 500;
    word-wrap: break-word;
    color: white;
  }
`;

const BotaoBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <BotaoContainer>
      <button onClick={handleGoBack}>Voltar ao Menu</button>
    </BotaoContainer>
  );
};

export default BotaoBack;
