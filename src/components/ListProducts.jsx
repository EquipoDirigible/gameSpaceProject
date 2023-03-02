import React, { useEffect , useState} from 'react';
import axios from 'axios'; 
import ProductCard from '../components/ProductCard';
import {Container, Row, Modal, Button, Form, Col}  from 'react-bootstrap';
import Swal from 'sweetalert2';



const ListProducts = () => {

    const URL = "http://localhost:3000/products" 
    const [list, setList] = useState([]);

            // Edit modal-related
            const [showModal, setShowModal] = useState(false);
            const handleClose = () => setShowModal(false);
            const handleOpen = () => setShowModal(true);

            // Form-related 
       
            const [title, setTitle] = useState();
            const [description, setDescription] = useState();
            const [price, setPrice]= useState();
            const [difficulty, setDifficulty] = useState();
            const [players, setPlayers] = useState();
            const [duration, setDuration] = useState();
            const [publisher, setPublisher] = useState();
            const [age, setAge] = useState();
            const [genre, setGenre] = useState();
            const [image, setImage] = useState();

            const handleProductTitleUpdate = ({event}) => {
                setTitle(event.target.value)
            }
            const handleProductDescriptionUpdate = ({event}) => {
                setDescription(event.target.value)
            }
            const handleProductPriceUpdate = ({event}) => {
                setPrice(event.target.value)
            }
            const handleProductDifficultyUpdate = ({event}) => {
                setDifficulty(event.target.value)
            }
            const handleProductPlayersUpdate = ({event}) => {
                setPlayers(event.target.value)
            }
            const handleProductDurationUpdate = ({event}) => {
                setDuration(event.target.value)
            }
            const handleProductPublisherUpdate = ({event}) => {
                setPublisher(event.target.value)
            }
            const handleProductAgeUpdate = ({event}) => {
                setAge(event.target.value)
            }
            const handleProductGenreUpdate = ({event}) => {
                setGenre(event.target.value)
            }
            const handleProductImageUpdate = ({event}) => {
                setImage(event.target.value)
            }

   

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
    const handleUpdate = (product) => {
    handleOpen(); 
    // setList(product);
    }
    
    // UseState para grabar la información como estado, cada vez que cambie vuelve a renderizarse

    useEffect(() => {
        // UseEffect Body se ejecuta desde el principio de la aplicación 
        getData().then((response) => {
            setList(response.data);
        })
    }, [])

    return (
        <>
        <Container className="mb-5"> 
            <Row>  
            {
                list.map((product, index) => (
                    <ProductCard
                        key={index}
                        product ={product}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        // handleClose={handleClose}
                        handleOpen={handleOpen}
                        // setDataModal={setDataModal}
                    />
                ))
            } 
            </Row> 
            </Container>
            <Modal
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered 
               show={showModal} onHide={handleClose}
            > 
                <Modal.Header closeButton>
                    <Modal.Title>Edit product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!
                <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        name="title"
                        value={title}
                        onChange={handleProductTitleUpdate}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Product Description </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter product description"
                        name="description"
                        value={description}
                        onChange={handleProductDescriptionUpdate}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Price </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter product price"
                        name="price"
                        value={price}
                        onChange={handleProductPriceUpdate}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Select Product Difficulty Level </Form.Label>
                        <Form.Select
                        name="difficulty"
                        onChange={handleProductDifficultyUpdate}>
                            <option value="Easy">Easy</option>
                            <option value="Normal">Normal</option>
                            <option value="Hard">Hard</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Number of Players </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter product max number of players"
                        name="players"
                        value={players}
                        onChange={handleProductPlayersUpdate}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Game Duration </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter average game duration"
                        name="duration"
                        value={duration}
                        onChange={handleProductDurationUpdate}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Publisher </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Product Publisher"
                        name="publisher"
                        value={publisher}
                        onChange={handleProductPublisherUpdate}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Recommended age </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Product recommended age"
                        name="age"
                        value={age}
                        onChange={handleProductAgeUpdate}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Genre </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Product main genre"
                        name="genre"
                        value={genre}
                        onChange={handleProductGenreUpdate}/>
                    </Form.Group>
                </Row>
                    <Form.Group className="mb-3">
                        <Form.Label> Product Image </Form.Label>
                        <Form.Control
                        type="file"
                        placeholder="Attach product image"
                        name="image"
                        value={image}
                        onChange={handleProductImageUpdate}/>
                    </Form.Group> 
                    </Form> 
                </Modal.Body>
                <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                <Modal.Footer>
                    {/* <Button variant="secondary" type="reset" onClick={handleClose}>
                        Close
                    </Button> */}
                    
                </Modal.Footer>
            </Modal>
    </>
    )
}

export default ListProducts 