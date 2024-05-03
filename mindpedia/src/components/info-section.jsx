import React from 'react';

function InfoSection({ gender, name, age, nextAppointment }) {
    return (
      <section id="infos">
        <h2>informações</h2>
        <div>
          <label>Gênero:</label>
          <span id="genero">{gender}</span>
        </div>
        <div>
          <label>Nome:</label>
          <span id="nome">{name}</span>
        </div>
        <div>
          <label>Idade:</label>
          <span id="idade">{age}</span>
        </div>
        <div>
          <label>Próxima Consulta:</label>
          <span id="proxima-consulta">{nextAppointment}</span>
        </div>
      </section>
    );
  }

    export default InfoSection;