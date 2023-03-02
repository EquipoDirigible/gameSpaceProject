import React from 'react'
import './App.css'
import Footer from '../components/Footer'
import { Container  } from 'react-bootstrap'                                                                                    
import ListProducts from '../components/ListProducts'


const App = () => {
  return (
    <>
    <div> 
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
      <Footer/>
    </div>
    
    </>
  )
}
export default App;
