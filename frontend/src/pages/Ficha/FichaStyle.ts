const fichaBodyStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
};

const fichaHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    height: '10vh',
    backgroundColor: '#83baf0',
    color: 'white',
};

const fichaHeaderImageStyle = {
    borderRadius: '100px',
    width: '100px',
    height: '100px',
    marginTop: '40px',
    objectFit: 'cover',
};

const fichaMainSectionStyle = {
    padding: '20px',
    display: 'flex',
    height: '65vh',
    flexDirection: 'column',
};

const fichaArticleStyle = {
    marginBottom: '20px',
};

const fichaAsideStyle = {
    marginTop: '20px',
    color: '#7f8c8d',
};

const fichaFooterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    height: '6vh',
    backgroundColor: '#ecf0f1',
    borderTop: '1px solid #bdc3c7',
};

const fichaFooterButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: '#2980b9',
    },
};

const fichaAsideInnerStyle = {
    position: 'absolute',
    width: '200px',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    transition: 'transform 0.3s ease',
};

const fichaMainSectionArticleStyle = {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
};

const fichaContainerContatoStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
};

const fichaContatoStyle = {
    width: '100vw',
    backgroundColor: '#c6edf7',
    borderTop: '5px solid #2c3e50',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    alignItems: 'center',
};

const componentCampoStyle = {
    fontSize: '1.2em',
    color: '#333',
};

export {
    fichaBodyStyle,
    fichaHeaderStyle,
    fichaHeaderImageStyle,
    fichaMainSectionStyle,
    fichaArticleStyle,
    fichaAsideStyle,
    fichaFooterStyle,
    fichaFooterButtonStyle,
    fichaAsideInnerStyle,
    fichaMainSectionArticleStyle,
    fichaContainerContatoStyle,
    fichaContatoStyle,
    componentCampoStyle,
};
