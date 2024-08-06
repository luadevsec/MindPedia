const asideStyle = {
    '.menu-aside-container-defou': {
        backgroundColor: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        marginBottom: '20px',
        maxWidth: '300px',
    },
    
    '.menu-aside-header-defou': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    
    '.menu-aside-name-defou': {
        fontSize: '20px',
        color: '#333333',
        marginBottom: '10px',
    },
    
    '.menu-aside-img-defou': {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        overflow: 'hidden',
        backgroundColor: 'purple', /* Fundo roxo */
    },
    
    '.menu-aside-footer-defou': {
        display: 'flex',
        justifyContent: 'center',
    },
    
    '.menu-aside-button-defou': {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
    
};


const calendarStyle = {
    // Estilos para o componente Calendar
    '.menu-calendar-container-defou': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    
    '.menu-calendar-header-defou': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    
    '.menu-calendar-header-defou button': {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        padding: '5px 10px',
    },
    
    '.menu-calendar-grade-defou': {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '5px',
    },
    
    '.menu-calendar-day-defou': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
        width: '50px',
        border: '1px solid #747373',
        cursor: 'pointer',
    },
};

const headerStyle = {
    '.menu-header-container-defou': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    
    '.menu-header-container-defou h1': {
        fontSize: '24px',
        margin: '0',
        color: '#333',
    },
    
    '.menu-header-container-defou time': {
        fontSize: '18px',
        color: '#666',
        marginTop: '5px',
    },
};

const vwaside = '20vw';
const vwspace = '8vw';
const vwnav = '16vw';
const vhheader = '14vh';

const menuStyle = {
    vwmeio: `calc(100vw - ${vwaside} - ${vwspace} - ${vwnav})`,

    hpadding: '6px',
    'menu-header-container-defou': {
        padding: '6px',
        width: '100vw',
        height: `calc(${vhheader} - 2 * 6px)`,
    },

    'menu-navbar-container-defou': {
        backgroundColor: 'blue',
        width: '16vw',
        height: '100%',
    },

    'menu-calendar-container-defou': {
        width: `calc(100vw - 20vw - 8vw - 16vw)`,
        paddingTop: '30px',
        paddingBottom: '30px',
    },

    'menu-aside-container-defou': {
        width: '20vw',
        height: '40vh',
    },

    'menu-main-container-defou': {
        width: '100vw',
        height: `calc(100vh - 14vh)`,
        backgroundColor: '#fffeff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
};
const navbarStyle = {
    navcor: '#d3f5fa',

    '.menu-card-container-defou': {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#d3f5fa',
        borderBottom: '1px solid #e0e0e0',
        width: '100%',

        '&:last-child': {
            borderBottom: 'none',
        },

        '&:hover': {
            backgroundColor: '#17293b',
            color: '#fff',
        },
    },

    '.menu-card-img-defou': {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
        backgroundColor: '#0056b3',
    },

    '.menu-card-name-defou': {
        fontSize: '16px',
        fontWeight: '500',
    },

    '.menu-navbar-container-defou': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '$navcor',
        justifyItems: 'center',
    },

    '.menu-navbar-section-defou': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 60px)',
    },

    '.menu-navbar-button-defou': {
        padding: '10px 60px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        marginBottom: '10px',
        marginTop: '10px',

        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
};

export { menuStyle, navbarStyle, headerStyle, calendarStyle, asideStyle };