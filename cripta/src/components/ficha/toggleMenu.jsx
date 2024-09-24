import React, { useState } from 'react';
import styled from 'styled-components';

// Componente estilizado para o container principal do menu toggle
const ToggleMenuContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

// Componente estilizado para o aside (menu lateral)
const ToggleMenuAside = styled.aside`
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-250px'};
    width: 250px;
    height: 100%;
    background-color: #f4f4f4;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1;
`;

// Componente estilizado para o botão de toggle (aba)
const ToggleMenuButton = styled.button`
    position: fixed;
    justify-self: center;
    top: 0;
    right: ${props => props.isOpen ? '250px' : '0'};
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    z-index: 2;
    transition: right 0.3s ease;
`;

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ToggleMenuContainer>
            <ToggleMenuButton isOpen={isOpen} onClick={handleToggle}>&lt;</ToggleMenuButton>
            <ToggleMenuAside isOpen={isOpen}>
                <p>Você não tem nenhum arquivo no momento para esse paciente.</p>
            </ToggleMenuAside>
        </ToggleMenuContainer>
    );
};

export default ToggleMenu;
