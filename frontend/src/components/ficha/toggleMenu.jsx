import React, { useState } from 'react';

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`toggle-menu ${isOpen ? 'open' : ''}`}>
            <button onClick={handleToggle}>&lt;</button>
            <aside style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                <p>você não tem nenhum arquivo no momento para esse paciente</p>
            </aside>
        </div>
    );
};

export default ToggleMenu;
