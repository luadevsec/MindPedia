import styled from "styled-components";

const TextNotFound = () => {
  return (
    <div>
      <Text01> Não encontramos essa página!</Text01>
      <Text02>OOPS!</Text02>
    </div>
  );
};

const Text01 = styled.div`
  width: 459px;
  left: 1500px;
  top: 453px;
  position: absolute;
  color: #8093b8;
  font-size: 48px;
  font-family: Arimo;
  font-weight: 400;
  word-wrap: break-word;
`;

const Text02 = styled.div`
  left: 1500px;
  top: 319px;
  position: absolute;
  text-align: center;
  color: #566fa7;
  font-size: 96px;
  font-family: Galano Classic;
  font-weight: 800;
  word-wrap: break-word;
`;

export default TextNotFound;
