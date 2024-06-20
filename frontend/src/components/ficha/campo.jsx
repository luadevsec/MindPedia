import React from 'react';

class Campo extends React.Component {
    render() {
        const { titulo, conteudo } = this.props; // Recebe as props titulo e conteudo
        return (
            <h2 title={titulo}>
                {conteudo}
            </h2>
        );
    }
}

export default Campo;
