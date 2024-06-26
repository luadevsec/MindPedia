import React from 'react';
import './styles/aside.scss';

const Aside = ({ img, name }) => {
    return (
        <aside className="menu-aside-container-defou">
            <div className="menu-aside-header-defou">
                <img src={`../../assets/${img}.jpeg`} alt="imagem" className="menu-aside-img-defou" />
                <h2 className="menu-aside-name-defou">{name}</h2>
            </div>
            <div className="menu-aside-footer-defou">
                <button className="menu-aside-button-defou">Iniciar Consulta</button>
            </div>
        </aside>
    );
};

export default Aside;
