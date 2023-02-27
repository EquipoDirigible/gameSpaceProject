import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/container/App'
import Router from '../src/routes/Router'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router />
)
