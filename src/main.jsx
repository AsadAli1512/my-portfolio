import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: true, duration: 700, offset: 80 });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
