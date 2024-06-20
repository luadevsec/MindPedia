import React, { useState } from 'react';

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleToggle}>Toggle Menu</button>
            <aside style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
                <p>você não tem nenhum arquivo no momento para esse paciente</p>
            </aside>
        </div>
    );
};

export default ToggleMenu;