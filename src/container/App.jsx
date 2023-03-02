import React from 'react'
<<<<<<< HEAD
import './App.css'
import Footer from '../components/Footer'
import { Container  } from 'react-bootstrap'                                                                                    
=======
import '../components/stylesheets/reset.css'
                                                                                  
>>>>>>> feature/cardView
import ListProducts from '../components/ListProducts'
import NewNavbar from '../components/NewNavBar'
import '../container/App.css'


const App = () => {
  return (
<<<<<<< HEAD
    <>
    <div> 
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
      <Footer/>
    </div>
    
    </>
=======
    
    <div className="container-background"> 
    <NewNavbar/> 
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
    </div>

>>>>>>> feature/cardView
  )
}
export default App;
