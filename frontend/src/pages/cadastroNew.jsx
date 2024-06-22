import React, { useState } from 'react';

const CadastroNew = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
    };

    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={nome} onChange={handleNomeChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={senha} onChange={handleSenhaChange} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default CadastroNew;