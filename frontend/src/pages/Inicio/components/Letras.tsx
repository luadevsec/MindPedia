import styled from "styled-components";

const Textos = () => {
  return (
    <div>
      <Letra01>MindPédia</Letra01>
      <Letra02>MindPédia</Letra02>
      <Letra03>MindPédia</Letra03>
    </div>
  );
};

const Letra01 = styled.div`
  color: #024caa;
  font-family: "Inter-Regular", Helvetica;
  font-size: 200px;
  font-weight: 400;
  left: 5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 200px;
  width: 2500px;
`;

const Letra02 = styled.div`
  color: #afeffd;
  font-family: "Inter-Regular", Helvetica;
  font-size: 200px;
  font-weight: 400;
  left: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 200px;
  width: 2500px;
`;

const Letra03 = styled.div`
  color: #f4b848;
  font-family: "Inter-Regular", Helvetica;
  font-size: 200px;
  font-weight: 400;
  left: 26px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 200px;
  width: 2500px;
`;

export default Textos;
