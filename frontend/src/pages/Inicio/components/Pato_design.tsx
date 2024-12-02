import styled from "styled-components";

const PatoInicio = () => {
  return (
    <div>
      <SombraPato />
      <FacePato />
      <SombraBico />
      <Bico />
      <Bico2 />
      <Bico3 />
      <Olho />
      <Olho2 />
      <Brilho />
      <BrilhoOlho />
      <Texto />
    </div>
  );
};

const SombraPato = styled.div`
  background-color: #d9d9d9;
  border-radius: 512px/262px;
  height: 524px;
  left: 750px;
  position: absolute;
  top: 460px;
  width: 1024px;
`;
const FacePato = styled.div`
  background-color: #faf6ed;
  border-radius: 535.5px/262.5px;
  height: 525px;
  left: 735px;
  position: absolute;
  top: 420px;
  width: 1071px;
`;
const SombraBico = styled.div`
  background-color: #d9d9d9;
  border-radius: 206px/107px;
  height: 214px;
  left: 1060px;
  position: absolute;
  top: 600px;
  width: 412px;
`;

const Bico = styled.div`
  background-color: #c9762f;
  border-radius: 203.5px/94.5px;
  height: 189px;
  left: 1065px;
  position: absolute;
  top: 600px;
  width: 407px;
`;

const Bico2 = styled.div`
  background-color: #e48b32;
  border-radius: 190px/79.5px;
  height: 159px;
  left: 1080px;
  position: absolute;
  top: 620px;
  width: 380px;
`;

const Bico3 = styled.div`
  background-color: #f4b848;
  border-radius: 201px/79.5px;
  height: 159px;
  left: 1070px;
  position: absolute;
  top: 610px;
  width: 402px;
`;

const Olho = styled.div`
  background-color: #010101;
  border-radius: 52px/64.5px;
  height: 129px;
  left: 1400px;
  position: absolute;
  top: 460px;
  width: 104px;
`;

const Olho2 = styled.div`
  background-color: #010101;
  border-radius: 51.5px/65px;
  height: 130px;
  left: 1000px;
  position: absolute;
  top: 460px;
  width: 103px;
`;

const Brilho = styled.div`
  background-color: #d9d9d9;
  border-radius: 16px/18px;
  height: 36px;
  left: 1455px;
  position: absolute;
  top: 470px;
  width: 32px;
`;

const BrilhoOlho = styled.div`
  background-color: #d9d9d9;
  border-radius: 15.5px/18px;
  height: 36px;
  left: 1055px;
  position: absolute;
  top: 470px;
  width: 31px;
`;

const Texto = styled.div`
  color: #024caa;
  font-family: "Inter-Regular", Helvetica;
  font-size: 200px;
  font-weight: 400;
  left: 5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 1039px;
`;

export default PatoInicio;
