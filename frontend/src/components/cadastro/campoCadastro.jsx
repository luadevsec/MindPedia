import React from 'react';
import './campoCadastro.css';

const CampoCadastro = ({ label, name, type, required = false , value, onChange}) => {
    return (
        <article className='cadastro-field'>
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
            <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
        />
        </article>
    );
};

export default CampoCadastro;

