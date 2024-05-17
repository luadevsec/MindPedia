import React from 'react';
import Navbar from '../components/menu/navbar';
import Header from '../components/menu/header';
import Aside from '../components/menu/aside';
import Calendar from '../components/menu/calendar';

import '../components/menu/styles/menu.scss';

const Menu = () => {
    return (
        <>
        <Header />
        <main>
            <Aside name="lucas" img="9" />
            <Calendar />
            <Navbar />
            
        </main>
        </>
    );
}

export default Menu;