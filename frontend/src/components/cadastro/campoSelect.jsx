import React from "react";

const CampoSelect = ({ name, options, required }) => {
    return (
        <article>
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
            <select id={name} name={name} required={required}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </article>
    );
}

export default CampoSelect;
