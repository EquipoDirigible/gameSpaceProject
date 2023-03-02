import React from 'react'
import {
    BrowserRouter,
    Routes, 
    Route
} from "react-router-dom"; 
import App from '../pages/App'
import NavBar from '../components/NavBar'
import NewProduct from '../pages/NewProduct'
// import EditProduct  from '../pages/EditProduct';
// import ProductsHandler from '../handler/productsHandler';

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar /> 
        <Routes> 
            <Route path='/' element={<App/>} /> 
            <Route path='/new' element={<NewProduct/>} /> 
            {/* <Route path='/edit' element={<EditProduct/>} /> */}
        </Routes>
        </BrowserRouter>
    )
}


export default Router; 