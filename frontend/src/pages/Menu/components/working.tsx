import styled from "styled-components";

const WorkingContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
    `;


interface WorkingProps {
    name: string;
}
const Working = ({ name } : WorkingProps) => {
    return (
        <WorkingContainer>
            <h1>{name}</h1>
            <p>Em construção...</p>
        </WorkingContainer>
    );
}

export default Working;