import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Campo from '../components/ficha/campo';
import ButtonHome from '../components/utils/button_home';
import ToggleMenu from '../components/ficha/toggleMenu';




function Ficha() {
    const nfez = "matheus n fez ainda";


    const { id } = useParams(); // Obtenha o ID da URL
    const [dados, setDados] = useState(null); // Estado para armazenar os dados do paciente
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/paciente/${id}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados do paciente');
                }
                const data = await response.json();

                // Adicione valores padrão para dados ausentes
                const pacienteComDadosCompletos = {
                    ...data,
                    cpf: data.cpf || nfez,
                    rg: data.rg || nfez,
                    dataNascimento: data.dataNascimento || nfez,
                    telefone: data.telefone || nfez,
                    contatoEmergencia: data.contatoEmergencia || { nome: nfez, telefone: nfez }
                };

                setDados(pacienteComDadosCompletos);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!dados) {
        return <div>Nenhum dado encontrado</div>;
    }

    return (
        <>
            <header className='ficha-header-container-new'>
            <img 
                    src={require(`../../public/assets/${dados.idFoto}.jpeg`)}
                    alt="Foto do Paciente" 
                />
                <Campo titulo="Nome do Paciente" conteudo={dados.nome} />
                <ButtonHome />
            </header>
            <main className='ficha-main-conatiner-new'>
                <section className='ficha-main-section-new'>
                    <section className='ficha-mainsection-section-new'>
                        <h2>informações</h2>
                        <div className='ficha-mainsection-content-new'>
                        <Campo titulo="CPF ou RG" conteudo={dados.rg} />
                        <Campo titulo="Data de Nascimento" conteudo={dados.dataNascimento} />
                        <Campo titulo="Idade" conteudo={dados.idade} />
                        <Campo titulo="Sexualidade" conteudo={dados.sexualidade} />
                        <Campo titulo="Genero" conteudo={dados.genero} />
                        </div>
                    </section>
                    <section className='ficha-mainsection-section-new'>
                        <h2>contatos</h2>
                        <div className='ficha-mainsection-content-new'>
                        <Campo titulo="Numero" conteudo={dados.numero} />
                        <Campo titulo="Numero auxiliar" conteudo={dados.numeroaux} />
                        <Campo titulo="Email" conteudo={dados.email} />
                        </div>
                    </section>
                    <section className='ficha-mainsection-section-new'>
                        <h2>informações adicionais</h2>
                        <div className='ficha-mainsection-content-new'>
                        <Campo titulo="estado civil" conteudo={dados.estadocivil} />
                        <Campo titulo="profissão" conteudo={dados.profissao} />
                        <Campo titulo="etinia" conteudo={dados.etinia} />
                        <Campo titulo="hobby" conteudo={dados.hobby} />
                        </div>
                    </section>
                </section>
                <ToggleMenu className='ficha-main-aside-new'/>
            </main>
            <footer className='ficha-footer-container-new'>
                <button>&lt; anterior</button>
                <button>próximo &gt;</button>
            </footer>
        </>
    );
}

export default Ficha;
