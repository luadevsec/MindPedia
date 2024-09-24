import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Campo ({ titulo, conteudo }: { titulo: string, conteudo: string | null }) {
    return (
        <h2 className='component-campo' title={titulo}>
            {conteudo || ''}
        </h2>
    );
}


function Ficha() {
    const { id } = useParams(); // Obtém o ID da URL
    const [dados, setDados] = useState({
        id: null,
        idFoto: null,
        nome: null,
        cpf: null,
        dataNascimento: null,
        sexualidade: null,
        genero: null,
        numero: null,
        numeroAux: null,
        email: null,
        estadoCivil: null,
        profissao: null,
        etnia: null,
        hobby: null
    }); // Estado para armazenar os dados do paciente
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState<string | null>(null); // Estado para armazenar erros

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8080/paciente/${id}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados do paciente');
                }
                const data = await response.json();

                // Mapeia os dados recebidos para o formato esperado na interface
                const pacienteComDadosCompletos = {
                    id: data.id,
                    idFoto: data.idFoto,
                    nome: data.nome,
                    cpf: data.cpf || 'Não informado',
                    dataNascimento: data.dataNascimento || 'Não informada',
                    sexualidade: data.sexualidade || 'Não informada',
                    genero: data.genero || 'Não informado',
                    numero: data.numero || 'Não informado',
                    numeroAux: data.numeroAux || 'Não informado',
                    email: data.email || 'Não informado',
                    estadoCivil: data.estadoCivil || 'Não informado',
                    profissao: data.profissao || 'Não informada',
                    etnia: data.etnia || 'Não informada',
                    hobby: data.hobby || 'Não informado'
                };

                setDados(pacienteComDadosCompletos);
                       } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (error) {
        return <div className="error">Erro: {error}</div>;
    }

    if (!dados) {
        return <div className="no-data">Nenhum dado encontrado</div>;
    }

    return (
        <>
            <header className='ficha-header-container'>
                <img 
                    src={getImage(dados.idFoto)}
                    alt="Foto do Paciente" 
                />
                <Campo titulo="Nome do Paciente" conteudo={dados.nome} />
                <ButtonHome />
            </header>
            <main className='ficha-main-container'>
                <section className='ficha-main-section'>
                    <section className='ficha-mainsection-section'>
                        <h2>Informações</h2>
                        <div className='ficha-mainsection-content'>
                            <Campo titulo="CPF" conteudo={dados.cpf} />
                            <Campo titulo="Data de Nascimento" conteudo={dados.dataNascimento} />
                            <Campo titulo="Sexualidade" conteudo={dados.sexualidade} />
                            <Campo titulo="Gênero" conteudo={dados.genero} />
                        </div>
                    </section>
                    <section className='ficha-mainsection-section'>
                        <h2>Contatos</h2>
                        <div className='ficha-mainsection-content'>
                            <Campo titulo="Número" conteudo={dados.numero} />
                            <Campo titulo="Número Auxiliar" conteudo={dados.numeroAux} />
                            <Campo titulo="Email" conteudo={dados.email} />
                        </div>
                    </section>
                    <section className='ficha-mainsection-section'>
                        <h2>Informações Adicionais</h2>
                        <div className='ficha-mainsection-content'>
                            <Campo titulo="Estado Civil" conteudo={dados.estadoCivil} />
                            <Campo titulo="Profissão" conteudo={dados.profissao} />
                            <Campo titulo="Etnia" conteudo={dados.etnia} />
                            <Campo titulo="Hobby" conteudo={dados.hobby} />
                        </div>
                    </section>
                </section>
                <ToggleMenu className='ficha-main-aside' />
            </main>
            <footer className='ficha-footer'>
                <button>&lt; Anterior</button>
                <button>Próximo &gt;</button>
            </footer>
        </>
    );
}

export default Ficha;
