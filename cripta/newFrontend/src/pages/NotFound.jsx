import React from 'react';
import imageResolve from '@utils/imageResolve';

const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <img src={imageResolve('404.png')} alt="404" />
        </div>
    );
};

export default NotFound;