
    import React from 'react';
    
    const Card = ({ img, name, data, id}) => {
        return (
            <a href={`/ficha/${id}`} className="menu-card-container-defou">
                <img src={`../../assets/${img}.jpeg`} alt={name} className="menu-card-img-defou" />
                <span className="menu-card-name-defou">{name}</span>
                
            </a>
        );
    }
    
    export default Card;
    