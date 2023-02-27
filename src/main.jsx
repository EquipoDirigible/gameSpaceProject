import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from '../src/container/App';
import Router from '../src/routes/Router'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './components/stylesheets/Footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router />
)
