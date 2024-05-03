import React from 'react';

function Calendar({ calendarImg }) {
    return (
      <nav>
        <div id="calendario">
          <h2>calendário</h2>
          <img src={calendarImg} alt="Calendar" />
        </div>
        <div id="botoes-calendario">
          <button>marcar consulta</button>
          <button>cancelar consulta</button>
        </div>
      </nav>
    );
  }

    export default Calendar;