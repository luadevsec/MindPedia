import { Form } from "react-bootstrap";

const TextForm = ({ name }: { name: string }) => (
    <Form.Group controlId={`form${name}`} className="mb-3">
        <Form.Label>{name}</Form.Label>
        <Form.Control type="text" name={name} placeholder={`Digite seu ${name}`} />
    </Form.Group>
    );

const SelectForm = ({ name, options }: { name: string; options: string[] }) => (
    <Form.Select name={name}>
        {options.map((option, index) => (
        <option value={option} key={index}>
            {option}
        </option>
        ))}
    </Form.Select>
    );

const CheckboxForm = ({ name, options }: { name: string; options: string[] }) => (
    options.map((option, index) => (
        <Form.Check
        type="checkbox"
        name={name}
        label={option}
        value={option}
        key={index}
        />
    ))
    );

const RadioForm = ({ name, options }: { name: string; options: string[] }) => (
    options.map((option, index) => (
        <Form.Check
        type="radio"
        name={name}
        label={option}
        value={option}
        key={index}
        />
    ))
    );

export { SelectForm, CheckboxForm, RadioForm, TextForm };