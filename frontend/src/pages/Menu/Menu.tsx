import { useState, useEffect } from 'react';
import './styles/header.scss';
import { formatTime } from '../../utils/date';

/* uso geral

cardList : lista de cards com nome, id e idFoto

*/

/* uso local

ficha de perfil : lista de usuarios em pacotes
Header : timer pra ver a data e hora

*/
const Header = () => {
    const [time, settime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            settime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header className="menu-header-container-defou">
            <h1>Consultas</h1>
            <time dateTime={time.toISOString()}>{formatTime(time)}</time>
        </header>
    );
};


interface asideProps {
    img : string;
    name : string;
}
const Aside = ({ img , name } : asideProps) => {
    return (
        <aside className="menu-aside-container-defou">
            <div className="menu-aside-header-defou">
                <img src={`../../assets/${img}.jpeg`} alt="imagem" className="menu-aside-img-defou" />
                <h2 className="menu-aside-name-defou">{name}</h2>
            </div>
            <div className="menu-aside-footer-defou">
                <button className="menu-aside-button-defou">Iniciar Consulta</button>
            </div>
        </aside>
    );
};

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(1);

    const handlePrevMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth === 1 ? 13 : prevMonth - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth === 13 ? 1 : prevMonth + 1));
    };

    const renderCalendar = () => {
        // Lógica para renderizar os dias do calendário
        // Aqui você pode usar um loop para criar os quadrados do dia clicáveis
        // e exibir o número do dia correspondente a cada quadrado

        // Exemplo de implementação:
        const daysInMonth = 28;
        const days = [];

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(
                <div key={i} className="menu-calendar-day-defou" onClick={() => handleDayClick(i)}>
                    {i}
                </div>
            );
        }

        return days;
    };

    const handleDayClick = (day: number) => {
        // Lógica para lidar com o clique em um dia específico
        // Aqui você pode implementar a lógica para exibir mais informações
        // sobre o dia clicado ou realizar alguma ação específica

        console.log(`Clicou no dia ${day}`);
    };

    return (
        <div className="menu-calendar-container-defou">
            <div className="menu-calendar-header-defou">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>Mês {currentMonth}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>

            <div className="menu-calendar-grade-defou">
                {renderCalendar()}
            </div>
        </div>
    );
};



const Navbar = () => {

    const [userList, setUsers] = useState<cardProps[]>([]);

    useEffect(() => {
        const fetchCardInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/cardInfo');
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados da API');
                }
                const data = await response.json();
                setUsers(data);
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
                body: JSON.stringify({})

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
            setUsers(newData);
        } catch (error) {
            console.error('Erro ao criar novo paciente:', error);
        }
    };
    
    interface cardProps {
        name: string;
        id: number;
        idFoto: string; // Add the idFoto property
    }
    const Card = ({name, id, idFoto} : cardProps) => {
        return (
            <a href={`/ficha/${id}`} className="menu-card-container-defou">
                <img src={`../../public/assets/${idFoto}.jpeg`} alt={name} className="menu-card-img-defou" />
                <span className="menu-card-name-defou">{name}</span>
                
            </a>
        );
    }

    return (
        <nav className="menu-navbar-container-defou">
            <section className="menu-navbar-section-defou">
                {userList.map((user) => { return <Card id={user.id} name={user.name} idFoto={user.idFoto} key={user.id} /> })}
            </section>
            <button className="menu-navbar-button-defou" onClick={generate}>+ gerar</button>
            <a className="menu-navbar-button-defou"href="/cadastro">cadastrar</a>
        </nav>
    );
}


const Menu = () => {
    return (
        <>
        <Header />
        <main className='menu-main-container-defou'>
            <Aside img="need to fix image later" name="Dr. Fulano" />
            <Calendar />
            <Navbar />
            
        </main>
        </>
    );
}

export default Menu;