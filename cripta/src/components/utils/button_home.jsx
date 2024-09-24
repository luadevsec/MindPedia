import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ButtonHome = () => {
    return (
        <Link to="/menu">
            <button>
                <FaHome />
            </button>
        </Link>
    );
};

export default ButtonHome;