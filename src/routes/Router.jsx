import React from 'react'
import {
    BrowserRouter,
    Routes, 
    Route
} from "react-router-dom"; 
import App from '../container/App'
import NavBar from '../components/NavBar'
import NewProduct from '../container/NewProduct'

import ListProducts from '../components/ListProducts'

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar /> 
       
        <ListProducts/> 
        <Routes> 
            <Route path='/' element={<App/>} /> 
            <Route path='/new' element={<NewProduct/>} /> 
        </Routes>
        </BrowserRouter>
    )
}
export default Router; 