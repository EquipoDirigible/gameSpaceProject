import React from 'react'
import '../components/stylesheets/reset.css'
                                                                                  
import ListProducts from '../components/ListProducts'
import NewNavbar from '../components/NewNavBar'
import '../container/App.css'

const App = () => {
  return (
    
    <div className="container-background"> 
    <NewNavbar/> 
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
    </div>

  )
}
export default App;
