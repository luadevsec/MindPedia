import styled from "styled-components";

const InformacoesAdd = () => {
  return (
    <div>
      <InformaEsAdicionais />
      <Ball01 />
      <Ball02 />
      <Ball03 />
      <Barra01></Barra01>
      <Barra02 />
      <FotoDoPaciente />
    </div>
  );
};

const InformaEsAdicionais = styled.div`
  width: 500px;
  display: flex;
  height: 1000px;
  position: relative;
  background: #024caa;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  overflow: hidden;
  left: 1730px;
  top: 150px;
`;

const Ball01 = styled.div`
  width: 46px;
  height: 43.1px;
  position: absolute;
  background: #ffffff;
  border-radius: 100%;
  right: 720px;
  bottom: 380px;
`;

const Ball02 = styled.div`
  width: 46px;
  height: 43.1px;
  position: absolute;
  background: #ffffff;
  border-radius: 100%;
  right: 720px;
  bottom: 450px;
`;

const Ball03 = styled.div`
  width: 46px;
  height: 43.1px;
  position: absolute;
  background: #ffffff;
  border-radius: 100%;
  right: 720px;
  bottom: 310px;
`;

const Barra01 = styled.div`
  width: 400px;
  height: 42px;
  left: 1790px;
  top: 700px;
  position: absolute;
  background: #afeffd;
  border-radius: 50px;
  display: flex;
`;

const Barra02 = styled.div`
  width: 400px;
  height: 42px;
  left: 1790px;
  top: 600px;
  position: absolute;
  background: #afeffd;
  border-radius: 50px;
`;

const FotoDoPaciente = styled.div`
  width: 203px;
  height: 193px;
  left: 1880px;
  top: 280px;
  position: absolute;
  background: #afeffd;
  border-radius: 111px;
`;

export default InformacoesAdd;
