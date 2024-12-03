import Header from "./components/Header";
import Main from "./components/main";
import { Pmock } from "../../contexts/pacienteMock";

const Atendimento = () => {
  return (
    <div>
      <Header paciente={Pmock} />
      <Main idPaciente={Pmock.id} />
    </div>
  );
};

export default Atendimento;
