import Avaliador from "./components/avaliador";
import Contador from "./components/contador";
import Nomeador from "./components/nomeador";
import Themador from "./components/themador";
import Vulnerable from "./components/vulnerable";
const TestScreen = () => {
  return (
    <div style={{ padding: '20px' }}>
        <h1>Testes</h1>
        <Nomeador />
        <Contador />
        <Avaliador />
        <Themador />
        <Vulnerable />
    </div>
  );
};

export default TestScreen;
