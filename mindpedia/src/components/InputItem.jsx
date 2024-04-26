import React from 'react';

function InputItem({ type, required, children }) {
  return (
    <article>
      <label>
        {children}
        <input type={type} required={required} />
      </label>
    </article>
  );
}

export default InputItem;
