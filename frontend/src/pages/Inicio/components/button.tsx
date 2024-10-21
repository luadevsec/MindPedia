import styled, { keyframes } from "styled-components";

const BotaoInicio: React.FC = () => {
  return (
    <div>
      <Wrapper />
      <Button>Iniciar</Button>
    </div>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: auto;
`;

const spanAnimation1 = keyframes`
  0% {
    left: -200px;
  }
  100% {
    left: 200px;
  }
`;

const spanAnimation2 = keyframes`
  0% {
    top: -70px;
  }
  100% {
    top: 70px;
  }
`;

const spanAnimation3 = keyframes`
  0% {
    right: -200px;
  }
  100% {
    right: 200px;
  }
`;

const spanAnimation4 = keyframes`
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 70px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 70px;
  background: linear-gradient(to left top, #5c5156 50%, #ebd9e1 50%);
  border: none;
  color: #fff;
  font-size: 23px;
  letter-spacing: 3px;
  font-family: "Lato";
  font-weight: 600;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  bottom: -1000px;

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    height: 3px;
    width: 200px;
    top: 0;
    left: -200px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), #f6e58d);
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    animation: ${spanAnimation1} 2s linear infinite;
    animation-delay: 1s;
  }

  span:nth-child(2) {
    height: 70px;
    width: 3px;
    top: -70px;
    right: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #f6e58d);
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    animation: ${spanAnimation2} 2s linear infinite;
    animation-delay: 2s;
  }

  span:nth-child(3) {
    height: 3px;
    width: 200px;
    right: -200px;
    bottom: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), #f6e58d);
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    animation: ${spanAnimation3} 2s linear infinite;
    animation-delay: 3s;
  }

  span:nth-child(4) {
    height: 70px;
    width: 3px;
    bottom: -70px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0), #f6e58d);
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
    animation: ${spanAnimation4} 2s linear infinite;
    animation-delay: 4s;
  }

  &:hover {
    transition: all 0.5s;
    transform: rotate(-3deg) scale(1.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
    span {
      animation-play-state: paused;
    }
  }
`;

export default BotaoInicio;
