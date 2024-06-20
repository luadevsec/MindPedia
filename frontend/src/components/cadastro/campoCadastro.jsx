import React from "react";

const CampoCadastro = ({ name, type, required }) => {
    return (
        <article>
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
            <input 
                type={type} 
                id={name} 
                name={name} 
                required={required} 
            />
        </article>
    );
}

export default CampoCadastro;
