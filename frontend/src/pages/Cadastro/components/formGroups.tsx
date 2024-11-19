import { Form } from "react-bootstrap";



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

export { SelectForm, CheckboxForm, RadioForm };