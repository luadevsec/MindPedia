import Logoo from "./hooks/14.png";
import BotaoBack from "./components/botao";
import TextNotFound from "./components/textos";
const NotFound = () => {
  return (
    <div>
      <BotaoBack />
      <TextNotFound />
      <img
        src={Logoo}
        style={{
          width: "900px",
          height: "1200px",
          left: "405px",
          top: "10px",
          position: "absolute",
        }}
      />
    </div>
  );
};
export default NotFound;
