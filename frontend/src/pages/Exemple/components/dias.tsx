import useDia from "../hooks/dias";

const Dias = () => {
    const { response } = useDia();
    console.log(response?.data);
    return <div>Dias</div>;
}

export default Dias;