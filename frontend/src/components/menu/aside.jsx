import React from 'react';
import './styles/aside.scss';

const Aside = ({ img, name }) => {
    return (
        <aside className="aside">
            <div className="aside-header">
                <img src={`../../../../public/assets/${img}.jpg`} alt="imagem" className="aside-img" />
                <h2 className="aside-name">{name}</h2>
            </div>
            <div className="aside-footer">
                <button className="aside-button">Iniciar Consulta</button>
            </div>
        </aside>
    );
};

export default Aside;
