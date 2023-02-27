import React from 'react'
import '../components/stylesheets/reset.css'

import { Container  } from 'react-bootstrap'                                                                                    
import ListProducts from '../components/ListProducts'
import NewNavbar from '../components/NewNavBar'
import '../container/App.css'

const App = () => {
  return (
    
    <Container fluid> 
    <NewNavbar/> 
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
    </Container>

  )
}
export default App;
