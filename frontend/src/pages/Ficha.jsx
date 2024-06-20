import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Campo from '../components/ficha/campo';
import ButtonHome from '../components/utils/button_home';
import ToggleMenu from '../components/ficha/toggleMenu';
import pacientes from '../mockdata';

import './Ficha.css';

function Ficha() {
    const { id } = useParams(); // Obtenha o ID da URL
    const [dados, setDados] = useState(null); // Estado para armazenar os dados do paciente


    useEffect(() => {
        // Simular fetching dos dados do paciente
        const paciente = pacientes.find(paciente => paciente.id === parseInt(id));
        if (paciente) {
            setDados(paciente);
        }
    }, [id]);

    if (!dados) {
        return <div>Carregando...</div>;
    }


    return (
        <>
            <header>
                <img src={dados.fotoUrl} alt="Foto do Paciente" />
                <Campo titulo="Nome do Paciente" conteudo={dados.nome} />
                <ButtonHome />
            </header>

            <main>
                <section>
                    <article>
                        <Campo titulo="CPF" conteudo={dados.cpf} />
                        <Campo titulo="RG" conteudo={dados.rg} />
                        <Campo titulo="Data de Nascimento" conteudo={dados.dataNascimento} />
                        <Campo titulo="Idade" conteudo={dados.idade} />
                    </article>

                    <ToggleMenu />
                    
                </section>
                <section>
                    <h2>Contatos</h2>
                    <Campo titulo="Email" conteudo={dados.email} />
                    <Campo titulo="Telefone" conteudo={dados.telefone} />
                    <Campo titulo="Contato de Emergência" conteudo={dados.contatoEmergencia} />
                </section>
            </main>

            <footer>
                <button>&lt; anterior</button>
                <button>próximo &gt;</button>
            </footer>
        </>
    );
}

export default Ficha;
