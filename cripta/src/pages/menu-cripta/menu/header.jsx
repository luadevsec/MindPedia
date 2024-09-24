import React, { useState, useEffect } from 'react';
import './styles/header.scss';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}/${month} ${hours}:${minutes}`;
    };

    return (
        <header className="menu-header-container-defou">
            <h1>Consultas</h1>
            <time dateTime={currentTime.toISOString()}>{formatTime(currentTime)}</time>
        </header>
    );
};

export default Header;
