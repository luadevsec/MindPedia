import styled from 'styled-components';

const WellcomeContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Wellcome: React.FC = () => {
  return (
    <WellcomeContainer>
      <h1>Bem-vindo à Página Secreta!</h1>
      <p>Aproveite o contador abaixo 🎉</p>
    </WellcomeContainer>
  );
};

export default Wellcome;
