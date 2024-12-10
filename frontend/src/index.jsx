import React from "react";
import { createRoot } from 'react-dom';
import AppRoutes from "./routes";


// bootstrap index file (provider)
import 'bootstrap/dist/css/bootstrap.min.css';



const root = createRoot(document.getElementById('root')); 

root.render(

    <React.StrictMode>
        <AppRoutes/>
    </React.StrictMode>

); 
 