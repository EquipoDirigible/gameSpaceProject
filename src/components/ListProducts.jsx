import React, { useEffect , useState} from 'react';
import axios from 'axios'; 
import ProductCard from '../components/ProductCard';
import {Container, Row}  from 'react-bootstrap';
import Swal from 'sweetalert2';

const ListProducts = () => {

    const URL = "http://localhost:3000/products" 
    const [list, setList] = useState([]);

    const getData = async () => {
        const response = axios.get(URL); 
        return response; 
    }

    const handleDelete = async (id) => {
    
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes, delete it!'
                }).then(async (result) => {
                    if(result.isConfirmed) {
                       await axios.delete(`http://localhost:3000/products/${id}`)
                        .then((response) => {
                            if(response.status === 200) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Product deleted',
                                    showConfirmButton: true,
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                        }) 
                                setList(list.filter(product => product.id !== id))
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong',
                                })
                            }})
                        }})
    }
    
    
    // UseState para grabar la información como estado, cada vez que cambie vuelve a renderizarse
    
    // const [updateList, setUpdateList] = useState(false);

    useEffect(() => {
        // UseEffect Body se ejecuta desde el principio de la aplicación 
        getData().then((response) => {
            setList(response.data);
        })
    }, [])

    return (
        <Container className="mb-5"> 
            <Row>  
            {
                list.map((product, index) => (
                    <ProductCard
                        key={index}
                        product ={product}
                        handleDelete={handleDelete}
                        // setUpdateList={setUpdateList}
                        // updateList={updateList}
                    />
                ))
            } 
            </Row>
        </Container>
    )
}

export default ListProducts 