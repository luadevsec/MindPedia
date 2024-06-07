
    import React from 'react';
    
    const Card = ({ img, name, data }) => {
        return (
            <div className="card">
                <img src={`../../assets/${img}.jpeg`} alt={name} className="card-img" />
                <span className="card-name">{name}</span>
                
            </div>
        );
    }
    
    export default Card;
    