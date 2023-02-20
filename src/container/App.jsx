import React from 'react'
import './App.css'
import { Container  } from 'react-bootstrap'                                                                                    
import ListProducts from '../components/ListProducts'

const App = () => {
  return (
    <Container fluid> 
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
    </Container>
  )
}
export default App;
