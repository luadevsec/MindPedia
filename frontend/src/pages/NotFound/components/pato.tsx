import styled from "styled-components";

const Personagem = () => {
  return (
    <div>
      <SombraDoPato />
      <CaraDoPato />
      <Olho01 />
      <BrilhoNoOlho01 />
      <Olho02 />
      <BrilhoNoOlho02 />
      <SombraBico />
      <Bico01 />
      <Bico02 />
    </div>
  );
};

const SombraDoPato = styled.div`
  width: 761px;
  height: 594px;
  left: 400px;
  top: 350px;
  position: absolute;
  background: #d9d9d9;
  border-radius: 900px;
`;

const CaraDoPato = styled.div`
  width: 754px;
  height: 594px;
  left: 405px;
  top: 320px;
  position: absolute;
  background: #faf6ed;
  border-radius: 9999px;
`;

const Olho01 = styled.div`
  width: 95px;
  height: 139px;
  left: 920px;
  top: 484px;
  position: absolute;
  background: #010101;
  border-radius: 9999px;
`;

const BrilhoNoOlho01 = styled.div`
  width: 40px;
  height: 52px;
  left: 970px;
  top: 497px;
  position: absolute;
  background: white;
  border-radius: 9999px;
`;

const Olho02 = styled.div`
  width: 95px;
  height: 139px;
  left: 580px;
  top: 479px;
  position: absolute;
  background: #010101;
  border-radius: 9999px;
`;

const BrilhoNoOlho02 = styled.div`
  width: 40px;
  height: 50px;
  left: 630px;
  top: 497px;
  position: absolute;
  background: white;
  border-radius: 9999px;
`;

const SombraBico = styled.div`
  width: 353px;
  height: 181px;
  left: 620px;
  top: 632px;
  position: absolute;
  background: #d9d9d9;
  border-radius: 9999px;
`;

const Bico01 = styled.div`
  width: 353px;
  height: 169px;
  left: 620px;
  top: 627px;
  position: absolute;
  background: #e48b32;
  border-radius: 9999px;
`;

const Bico02 = styled.div`
  display: flex;
  border-radius: 9999px;
  height: 148px;
  width: 336px;
  left: 630px;
  top: 636px;
  position: absolute;
  background: #f7b439;
`;

export default Personagem;
