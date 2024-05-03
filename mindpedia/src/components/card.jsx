import React from 'react';

function Card({ href, imgSrc, alt, name }) {
    return (
      <li>
        <a href={href} className="card">
          <img src={imgSrc} alt={alt} />
          <span className="name">{name}</span>
        </a>
      </li>
    );
  }

  export default Card;