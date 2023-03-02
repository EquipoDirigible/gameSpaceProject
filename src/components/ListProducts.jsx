import React, { useEffect , useState} from 'react';
import axios from 'axios'; 
import ProductCard from '../components/ProductCard';
import {Container, Row}  from 'react-bootstrap';


const ListProducts = () => {

    const URL = "http://localhost:3000/products" 
    
    const getData = async () => {
        const response = axios.get(URL); 
        return response; 
    }
    // UseState para grabar la información como estado, cada vez que cambie vuelve a renderizarse
    const [list, setList] = useState([])

    useEffect(() => {
        // UseEffect Body se ejecuta desde el principio de la aplicación 
        getData().then((response) => {
            setList(response.data);
        })
    }, [])

    return (
        <div className="ProductContainer">
            <Container className="mb-5"> 
                <Row>  
                    {
                        list.map((product, index) => (
                        <ProductCard
                        key={index}
                        product ={product}
                        />
                        ))
                    } 
                </Row>
            </Container>
        </div>
    )
}

export default ListProducts 