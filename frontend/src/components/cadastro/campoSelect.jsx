import React from 'react';
import './campoSelect.css';

const CampoSelect = ({ label, name, options, required, value, onChange}) => {
    return (
        <article className='cadastro-field'>
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
            <select name={name} id={name} value={value} required={required}  onChange={onChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </article>
    );
};

export default CampoSelect;