import { Form } from "react-bootstrap";

const TextForm = ({
  name,
  value,
  onChange,
  placeholder,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <Form.Group controlId={`form${name}`} className="mb-3">
    <Form.Label>{name}</Form.Label>
    <Form.Control
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Form.Group>
);

const SelectForm = ({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) => (
  <Form.Group controlId={`form${name}`} className="mb-3">
    <Form.Label>{name}</Form.Label>
    <Form.Select name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export { TextForm, SelectForm };
