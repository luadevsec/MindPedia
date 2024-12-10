import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

// Função para calcular os dias do mês com base no ano e mês
const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // Calcula os dias do mês atual
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  // Calcula os dias do mês anterior
  const prevMonthDays = currentDate.getMonth() === 0
  ? getDaysInMonth(currentDate.getFullYear() - 1, 11)
  : getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() - 1);


  // Navegar entre os meses
  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
    setSelectedDay(null); // Resetar o dia selecionado
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
    setSelectedDay(null); // Resetar o dia selecionado
  };

  // Manter a semana alinhada
  const firstDayOfWeek = daysInMonth[0].getDay();
  const lastDayOfWeek = daysInMonth[daysInMonth.length - 1].getDay();

  const emptyDaysBefore = Array.from(
    { length: firstDayOfWeek },
    (_, i) => prevMonthDays[prevMonthDays.length - firstDayOfWeek + i] || new Date()
  );

  const nextMonthDays = Array.from(
    { length: 6 - lastDayOfWeek },
    (_, i) => new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i + 1)
  );
  
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          style={{
            backgroundColor: "#024CAA",
            border: "none",
            color: "#fff",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handlePrevMonth}
        >
          &lt;
        </Button>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <Button
          style={{
            backgroundColor: "#024CAA",
            border: "none",
            color: "#fff",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleNextMonth}
        >
          &gt;
        </Button>
      </div>
      <Row style={{ fontWeight: "bold", marginBottom: "10px" }}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <Col key={day} style={{ textAlign: "center" }}>
            {day}
          </Col>
        ))}
      </Row>
      <Row>
        {/* Dias vazios antes do primeiro dia */}
        {emptyDaysBefore.map((day, index) => (
  <Col key={`prev-${index}`} style={{ textAlign: "center" }}>
    <div
      style={{
        padding: "10px",
        margin: "5px auto",
        backgroundColor: "#eee",
        color: "#888",
        border: "1px solid #ccc",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {day instanceof Date ? day.getDate() : ""}
    </div>
  </Col>
))}
        {/* Dias do mês atual */}
        {daysInMonth.map((day) => (
          <Col key={day.getDate()} style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "10px",
                margin: "5px auto",
                backgroundColor:
                  selectedDay === day.getDate() ? "#024CAA" : "#fff",
                color: selectedDay === day.getDate() ? "#fff" : "#333",
                border: "1px solid #ccc",
                borderRadius: "50%",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelectedDay(day.getDate())}
            >
              {day.getDate()}
            </div>
          </Col>
        ))}
        {/* Dias do próximo mês */}
        {nextMonthDays.map((day, index) => (
          <Col key={`next-${index}`} style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "10px",
                margin: "5px auto",
                backgroundColor: "#eee",
                color: "#888",
                border: "1px solid #ccc",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {day.getDate()}
            </div>
          </Col>
        ))}
      </Row>
      {selectedDay && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#e3f2fd",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        >
          <strong>Dia {selectedDay} selecionado!</strong>
        </div>
      )}
    </div>
  );
};

export default Calendario;
