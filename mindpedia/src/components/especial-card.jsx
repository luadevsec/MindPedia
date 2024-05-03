import React from 'react';

function SpecialCard({ href, imgSrc, alt, name, action }) {
    return (
      <li>
        <a href={href} className="card special-card">
          <img src={imgSrc} alt={alt} />
          <span className="name">{name}</span>
          <span className="action">{action}</span>
        </a>
      </li>
    );
  }

  export default SpecialCard;