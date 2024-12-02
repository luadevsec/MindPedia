import { Form, Button } from "react-bootstrap";

interface CampoProps {
  name: string;
  type: string;
  options?: string[]; // Opcional, pois nem todos os campos precisam de `options`.
}

const constructor: CampoProps[] = [
  { name: "Nome", type: "text" },
  { name: "Email", type: "email" },
  { name: "Senha", type: "password" },
  { name: "Gênero", type: "select", options: ["Masculino", "Feminino", "Outro"] },
  { name: "País", type: "select", options: ["Brasil", "Estados Unidos", "Outro"] },
  { name: "Hobbies", type: "checkbox", options: ["Esportes", "Leitura", "Música"] },
  { name: "Estado Civil", type: "radio", options: ["Solteiro", "Casado", "Divorciado", "Viúvo"] },
  { name: "Aceitar termos", type: "checkbox" },
];

const Formulario = () => {
  return (
    <Form>
      {constructor.map((item) => (
        <Form.Group controlId={`form${item.name}`} className="mb-3" key={item.name}>
          <Form.Label>{item.name}</Form.Label>

          {item.type === "select" && item.options ? (
            <Form.Select name={item.name}>
              {item.options.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </Form.Select>
          ) : item.type === "checkbox" && item.options ? (
            item.options.map((option, index) => (
              <Form.Check
                type="checkbox"
                name={item.name}
                label={option}
                value={option}
                key={index}
              />
            ))
          ) : item.type === "radio" && item.options ? (
            item.options.map((option, index) => (
              <Form.Check
                type="radio"
                name={item.name}
                label={option}
                value={option}
                key={index}
              />
            ))
          ) : item.type === "checkbox" ? (
            <Form.Check type="checkbox" name={item.name} label={item.name} />
          ) : (
            <Form.Control
              type={item.type}
              name={item.name}
              placeholder={`Digite seu ${item.name.toLowerCase()}`}
            />
          )}
        </Form.Group>
      ))}

        <Button variant="primary" type="submit">
            Enviar
        </Button>
    </Form>
  );
};

export default Formulario;
