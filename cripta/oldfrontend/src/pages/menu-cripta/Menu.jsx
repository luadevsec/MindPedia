import React from 'react';
import Navbar from '../../../../cripta/frontend/src/components/menu/navbar';
import Header from '../../../../cripta/frontend/src/components/menu/header';
import Aside from '../../../../cripta/frontend/src/components/menu/aside';
import Calendar from '../../../../cripta/frontend/src/components/menu/calendar';

import '../components/menu/styles/menu.scss';

const Menu = () => {
    return (
        <>
        <Header />
        <main className='menu-main-container-defou'>
            <Aside/>
            <Calendar />
            <Navbar />
            
        </main>
        </>
    );
}

export default Menu;