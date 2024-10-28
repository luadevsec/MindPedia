import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  height: 800px;
  margin: 300px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  right: 200px;
`;
const Title = styled.h2`
  text-align: center;
  color: #e20808;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-weight: bold;
  color: red;
  padding: 2px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  border-radius: 20px;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  border-radius: 20px;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  border-radius: 20px;
`;

const FormContainer = () => {
  return (
    <div>
      <Container>
        <Title>Cadastro de Paciente</Title>
        <Label>Informações Pessoais</Label>
        <Label>Nome Completo</Label>
        <InputField type="text" />
        <Label>CPF ou RG</Label>
        <InputField type="text" />
        <Label>Estado Civil</Label>
        <SelectField>
          <option value="">Selecione</option>
          <option value="casado">Casado</option>
          <option value="solteiro">Solteiro</option>
          <option value="Divorciado">Divorciado</option>
        </SelectField>
        <Label>Data de Nascimento</Label>
        <DateInput type="date" />
        <Label>Gênero</Label>
        <SelectField>
        <option value="">Selecione</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Neutro">Neutro</option>
      </SelectField>
      <Label>Sexualidade</Label>
      <SelectField>
        <option value="">Selecione</option>
        <option value="Heterosexual">Heterosexual</option>
          <option value="Bisexual">Bisexual</option>
          <option value="Não Binário">Não Binário</option>
      </SelectField>
      <Label>Etnia</Label>
      <SelectField>
        <option value="">Selecione</option>
        <option value="Branco">Petro</option>
          <option value="Preto">Preto</option>
          <option value="Pardo">Pardo</option>
          <option value="Amarelo">Amarelo</option>
      </SelectField>
      </Container>
    </div>
  );
};

export default FormContainer;
