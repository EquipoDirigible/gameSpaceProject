import React from 'react'
import {
    BrowserRouter,
    Routes, 
    Route
} from "react-router-dom"; 
import App from '../container/App'
import NewProduct from '../container/NewProduct'


const Router = () => {
    return (
        <BrowserRouter>
        <Routes> 
            <Route path='/' element={<App/>} /> 
            <Route path='/new' element={<NewProduct/>} /> 
        </Routes>
        </BrowserRouter>
    )
}
export default Router; 