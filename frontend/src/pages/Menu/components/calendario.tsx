import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

interface CalendarioProps {
  days: string[];
}
const Calendario = ({ days }: CalendarioProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const prevMonthDays = currentDate.getMonth() === 0
    ? getDaysInMonth(currentDate.getFullYear() - 1, 11)
    : getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() - 1);

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
    setSelectedDay(null);
  };

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

  // Função para verificar se o dia está no array "days"
  const isSpecialDay = (date: Date) => {
    console.log(date);
    const dateString = date.toISOString().split('T')[0]; // Formato 'aaaa-mm-dd'
    console.log(dateString);
    return days.includes(dateString);
  };

  console.log(isSpecialDay(daysInMonth[12]));
  console.log(daysInMonth);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#070D44",
        border: "1px solid #024CAA",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        color: "#AFEFFD",
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
            backgroundColor: "#EC7105",
            border: "none",
            color: "#AFEFFD",
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
            backgroundColor: "#EC7105",
            border: "none",
            color: "#AFEFFD",
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
        {emptyDaysBefore.map((day, index) => (
          <Col key={`prev-${index}`} style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "10px",
                margin: "5px auto",
                backgroundColor: "#070D44",
                color: "#FFEBCD",
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
        {daysInMonth.map((day) => (
          <Col key={day.getDate()} style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "10px",
                margin: "5px auto",
                backgroundColor:
                  selectedDay === day.getDate()
                    ? "#EC7105"
                    : isSpecialDay(day)
                    ? "#FF5733" // Cor para os dias especiais
                    : "#024CAA",
                color:
                  selectedDay === day.getDate()
                    ? "#070D44"
                    : isSpecialDay(day)
                    ? "#070D44"
                    : "#AFEFFD",
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
        {nextMonthDays.map((day, index) => (
          <Col key={`next-${index}`} style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "10px",
                margin: "5px auto",
                backgroundColor: "#070D44",
                color: "#FFEBCD",
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
            backgroundColor: "#024CAA",
            color: "#AFEFFD",
            borderRadius: "6px",
          }}
        >
          <strong>Dia {selectedDay} selecionado!</strong>
        </div>
      )}
    </div>
  );
};

export default Calendario;
