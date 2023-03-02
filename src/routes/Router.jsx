import React from 'react'
import {
    BrowserRouter,
    Routes, 
    Route
} from "react-router-dom"; 
import App from '../container/App'
import NavBar from '../components/NavBar'
import NewProduct from '../container/NewProduct'
import EditProduct  from '../container/EditProduct';

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar /> 
        <Routes> 
            <Route path='/' element={<App/>} /> 
            <Route path='/new' element={<NewProduct/>} /> 
            <Route path='/edit' element={<EditProduct/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Router; 