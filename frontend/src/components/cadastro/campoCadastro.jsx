import React from 'react';
import './campoCadastro.css';

const CampoCadastro = ({ label, name, type, required = false }) => {
    return (
        <article className='cadastro-field'>
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
            <input type={type} name={name} id={name} required={required} />
        </article>
    );
};

export default CampoCadastro;
