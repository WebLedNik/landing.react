import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App/App';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PopupImg from "./components/PopupImg/PopupImg";
import BtnsMessengers from "./components/BtnsMessengers/BtnsMessengers";
import Notification from "./components/Notification/Notification";
import Navbar from "./components/Navbar/Navbar";



ReactDOM.render(
        <BrowserRouter>
            <Header/>
            <App/>
            <Footer />
            <BtnsMessengers />
            <Navbar />
        </BrowserRouter>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <PopupImg />
        <Notification />

    </React.StrictMode>,
    document.getElementById('popups')
)
