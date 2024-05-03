import React from 'react';

function Header() {
    const currentDate = new Date();
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
  
    return (
      <header>
        <h1>Menu Principal</h1>
        <div id="datetime">
          <span id="date">{currentDate.toLocaleDateString('pt-BR', dateOptions)}</span>
          <br />
          <span id="time">{currentDate.toLocaleTimeString('pt-BR', timeOptions)}</span>
        </div>
      </header>
    );
  }

  export default Header;