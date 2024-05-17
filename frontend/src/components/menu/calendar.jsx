import React, { useState } from 'react';
import './styles/calendar.scss'; // Importe o arquivo SCSS

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(1);

    const handlePrevMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth === 1 ? 13 : prevMonth - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth === 13 ? 1 : prevMonth + 1));
    };

    const renderCalendar = () => {
        // Lógica para renderizar os dias do calendário
        // Aqui você pode usar um loop para criar os quadrados do dia clicáveis
        // e exibir o número do dia correspondente a cada quadrado

        // Exemplo de implementação:
        const daysInMonth = 28;
        const days = [];

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(
                <div key={i} className="calendar-day" onClick={() => handleDayClick(i)}>
                    {i}
                </div>
            );
        }

        return days;
    };

    const handleDayClick = (day) => {
        // Lógica para lidar com o clique em um dia específico
        // Aqui você pode implementar a lógica para exibir mais informações
        // sobre o dia clicado ou realizar alguma ação específica

        console.log(`Clicou no dia ${day}`);
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>Mês {currentMonth}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>

            <div className="calendar">
                {renderCalendar()}
            </div>
        </div>
    );
};

export default Calendar;
