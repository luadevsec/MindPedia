
    import React from 'react';
    
    const Card = ({ img, name }) => {
        return (
            <div className="card">
                <img src={`../../../../public/assets/${img}.jpg`} alt={name} className="card-img" />
                <span className="card-name">{name}</span>
            </div>
        );
    }
    
    export default Card;
    