// CampoCadastro styles
const cadastroFieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};

const cadastroFieldLabelStyle = {
    fontSize: '1em',
    color: '#333',
};

const cadastroFieldInputStyle = {
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #bdc3c7',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: '#333',
};

const cadastroFieldInputFocusStyle = {
    outline: 'none',
    borderColor: '#2980b9',
};

// CampoSelect styles
const cadastroFieldSelectStyle = {
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #bdc3c7',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: '#333',
};

const cadastroFieldSelectFocusStyle = {
    outline: 'none',
    borderColor: '#2980b9',
};

// Estilos gerais
const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#b9ecf4', // Fundo azul claro
    color: '#333',
};

const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#c4c4ff', // Fundo branco
    borderRadius: '8px', // Cantos arredondados
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra
};

const headingStyle = {
    color: '#2c2c2c', // Cor do título
};

// Estilos para formulário
const sectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
};

const articleStyle = {
    width: 'calc(50% - 10px)', // Coloca dois articles por linha
    marginBottom: '20px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#24224f', // Cor do texto do label
};

const inputTextStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd', // Borda cinza
    borderRadius: '4px',
    boxSizing: 'border-box',
};

const inputFileStyle = {
    marginTop: '5px',
};

// Estilos para botão de envio
const submitButtonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#5f27cd', // Roxo escuro
    color: '#fff', // Cor do texto
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

const submitButtonHoverStyle = {
    backgroundColor: '#4a148c', // Roxo mais escuro no hover
};

// Estilos para dispositivos móveis
const articleMobileStyle = {
    width: '100%', // Apenas um article por linha em dispositivos móveis
};

// Exportando os estilos
export {
    cadastroFieldStyle,
    cadastroFieldLabelStyle,
    cadastroFieldInputStyle,
    cadastroFieldInputFocusStyle,
    cadastroFieldSelectStyle,
    cadastroFieldSelectFocusStyle,
    bodyStyle,
    containerStyle,
    headingStyle,
    sectionStyle,
    articleStyle,
    labelStyle,
    inputTextStyle,
    inputFileStyle,
    submitButtonStyle,
    submitButtonHoverStyle,
    articleMobileStyle,
};
