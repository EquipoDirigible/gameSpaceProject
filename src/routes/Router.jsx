import React from 'react'
import {
    BrowserRouter,
    Routes, 
    Route
} from "react-router-dom"; 
import App from '../pages/App'
import NewProduct from '../pages/NewProduct'


const Router = () => {
    return (
        <BrowserRouter>
        <Routes> 
            <Route path='/' element={<App/>} /> 
            <Route path='/new' element={<NewProduct/>} /> 
            {/* <Route path='/edit' element={<EditProduct/>} /> */}
        </Routes>
        </BrowserRouter>
    )
}


export default Router; 