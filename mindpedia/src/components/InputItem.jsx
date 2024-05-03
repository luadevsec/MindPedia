import React from 'react';

function InputField({ label, id, type, name, required }) {
  return (
    <article>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} required={required} />
    </article>
  );
}

export default InputField;
