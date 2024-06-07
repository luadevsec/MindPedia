import React, { useState, useEffect } from 'react';
import './styles/navbar.scss';
import Card from './card';

const Navbar = () => {

    let future = [{"nome":"Eduardo","id":"2e44d1ab-96eb-42c7-8470-06d1fb3e95e7","data":"10/02/2023","imagem":11},{"nome":"Igor","id":"c098f26c-80b4-48f9-923c-b93954b30bba","data":"18/07/2023","imagem":7},{"nome":"Helena","id":"bd9a8841-da38-4fee-ba8e-f2774702dd29","data":"14/08/2023","imagem":10},{"nome":"Igor","id":"829ebcc2-f569-4748-9fa3-b9e2ca5008fb","data":"18/08/2023","imagem":1},{"nome":"Carlos","id":"07b4e2c1-4cd9-4b18-afe6-315e349b3e4c","data":"11/10/2023","imagem":1},{"nome":"Diana","id":"a03ec3f5-8358-46e2-87a7-7a2147eeadce","data":"15/11/2023","imagem":7},{"nome":"Gabriel","id":"49512bd4-ce83-4703-9a57-a8e96ea37e56","data":"30/01/2024","imagem":7},{"nome":"Diana","id":"96da4607-4452-406c-b425-f9bcc070fca3","data":"09/04/2024","imagem":6}]

    const [aaa, setObjs] = useState([]);

    useEffect(() => {
        const fetchCardInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/cardInfo');
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados da API');
                }
                const data = await response.json();
                setObjs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCardInfo();
    }, []);


    const generate = async () => {
        try {
            const response = await fetch('http://localhost:8080/ramCreate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Coloque aqui os dados que você quer enviar no corpo da solicitação POST
                })
            });
    
            if (!response.ok) {
                throw new Error('Erro ao criar novo paciente');
            }
    
            // Após o POST bem-sucedido, fazer uma nova requisição GET para atualizar os dados
            const newResponse = await fetch('http://localhost:8080/cardInfo');
            if (!newResponse.ok) {
                throw new Error('Erro ao carregar dados da API');
            }
            const newData = await newResponse.json();
            setObjs(newData);
        } catch (error) {
            console.error('Erro ao criar novo paciente:', error);
        }
    };
    

    return (
        <nav className="navbar">
            <section className="navbar-section">
                {aaa.map((obj) => { return <Card img={obj.imagem} name={obj.nome} data= {obj.data} key={obj.nome} /> })}
            </section>
            <button className="navbar-button" onClick={generate}>+ cadastrar</button>
            
        </nav>
    );
}

export default Navbar;
