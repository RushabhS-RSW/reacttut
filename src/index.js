import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Todo from './Mui/Todo';
// import Btn from './Bootstrap/Btn';
// import Accordion from './Accordion/Accordion';
// import Contaxt from './contaxt/Contaxt';
// import App from './UseEffact/App';
// import App from './Axios/App';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
