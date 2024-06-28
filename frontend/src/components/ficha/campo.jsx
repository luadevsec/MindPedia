import React from 'react';
import './Campo.css';

class Campo extends React.Component {
    render() {
        const { titulo, conteudo } = this.props; // Recebe as props titulo e conteudo
        return (
            <h2 className='component-campo' title={titulo}>
                {conteudo}
            </h2>
        );
    }
}

export default Campo;
