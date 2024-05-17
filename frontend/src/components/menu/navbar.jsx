import React from 'react';
import './styles/navbar.scss';
import Card from './card';

const Navbar = () => {

    let objs = [
        {
            img: 1,
            name: 'lunna'
        },
        {
            img: 2,
            name: 'marcos'
        },
        {
            img: 3,
            name: 'lucas'
        },
        {
            img: 4,
            name: 'julia'
        },{
            img: 1,
            name: 'lunna'
        },
        {
            img: 2,
            name: 'marcos'
        },
        {
            img: 3,
            name: 'lucas'
        },
        {
            img: 4,
            name: 'julia'
        },{
            img: 1,
            name: 'lunna'
        },
        {
            img: 2,
            name: 'marcos'
        },
        {
            img: 3,
            name: 'lucas'
        },
        {
            img: 4,
            name: 'julia'
        },
    ]

    return (
        <nav className="navbar">
            <section className="navbar-section">
                {objs.map((obj) => { return <Card img={obj.img} name={obj.name} key={obj.name} /> })}
            </section>
            <button className="navbar-button">+ cadastrar</button>
        </nav>
    );
}

export default Navbar;
