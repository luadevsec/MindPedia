
    import React from 'react';
    
    const Card = ({ img, name, data, id}) => {
        return (
            <a href={`/ficha/${id}`} className="card">
                <img src={`../../assets/${img}.jpeg`} alt={name} className="card-img" />
                <span className="card-name">{name}</span>
                
            </a>
        );
    }
    
    export default Card;
    