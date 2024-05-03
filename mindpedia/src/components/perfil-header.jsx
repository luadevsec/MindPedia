import React from 'react';

function Header({ profileImg, name, email, number }) {
    return (
      <header>
        <div className="card-left">
          <img src={profileImg} alt="Profile Picture" />
          <h2>{name}</h2>
        </div>
        <div className="card-right">
          <p>Email: {email}</p>
          <p>Número: {number}</p>
        </div>
      </header>
    );
  }

    export default Header;