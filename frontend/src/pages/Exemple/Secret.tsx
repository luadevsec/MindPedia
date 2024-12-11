import Contador from './components/contador';
import Wellcome from './components/wellcome';
import UsernameVerification from './components/fetchTest';
import useDate from '../../utils/useDate';
import Menu from './components/menu';
import Ficha from './components/ficha';

const Example = () => {
  const { getCurrentDate, convertDate, visualDate } = useDate();

  const currentDate = getCurrentDate();
  console.log("Data atual:", currentDate);

  const isoString = currentDate.date.raw;
  const convertedDate = convertDate(isoString);
  console.log("Data convertida do ISO:", convertedDate);

  const visual = visualDate(currentDate);
  console.log("Data formatada visualmente:", visual);

  return <div>Data atual: {visual}</div>;
};


const Secret: React.FC = () => (
  <div>
    <Wellcome />
    <Contador />
    <UsernameVerification />
    <Example />
    <Ficha />
    <Menu />
  </div>
);

export default Secret;
