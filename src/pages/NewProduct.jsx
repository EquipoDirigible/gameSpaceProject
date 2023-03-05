import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import "../components/stylesheets/NewProduct.css";
import NewNavbar from '../components/NewNavBar';
import Footer from '../components/Footer';


const NewProduct = () => {
    const navigate = useNavigate.apply()

    const URL = "http://localhost:3000/products"

    const [productTitle, setProductTitle] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productPrice, setProductPrice] = useState(null)
    const [productDifficulty, setProductDifficulty] = useState("")
    const [productPlayers, setProductPlayers] = useState(null)
    const [productDuration, setProductDuration] = useState(null)
    const [productPublisher, setProductPublisher] = useState("")
    const [productAge, setProductAge] = useState(null)
    const [productGenre, setProductGenre] = useState("")
    const [productImage, setProductImage] = useState(null)

    const handleProductTitleChange = ((event) => {
        setProductTitle(event.target.value)
    })

    const handleProductDescriptionChange = ((event) => {
        setProductDescription(event.target.value)
    })

    const handleProductPriceChange = ((event) => {
        setProductPrice(event.target.value)
    })

    const handleProductDifficultyChange = ((event) => {
        setProductDifficulty(event.target.value)
    })

    const handleProductPlayersChange = ((event) => {
        setProductPlayers(event.target.value)
    })

    const handleProductDurationChange = ((event) => {
        setProductDuration(event.target.value)
    })

    const handleProductPublisherChange = ((event) => {
        setProductPublisher(event.target.value)
    })

    const handleProductAgeChange = ((event) => {
        setProductAge(event.target.value)
    })

    const handleProductGenreChange = ((event) => {
        setProductGenre(event.target.value)
    })

    const handleProductImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setProductImage(reader.result);
        };
    };

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // productsHandler.addProduct(newProduct);
        event.preventDefault();
        let newProduct = {
            "title": productTitle,
            "description": productDescription,
            "price": productPrice,
            "difficulty": productDifficulty,
            "players": productPlayers,
            "duration": productDuration,
            "publisher": productPublisher,
            "age": productAge,
            "genre": productGenre,
            "image": productImage
        };
        console.log(newProduct)
        const response = await axios.post(URL, newProduct);
        if (response.status === 201) {
            Swal.fire({
                icon: 'success',
                title: 'New product added',
                showConfirmButton: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            navigate('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong',
                footer: 'Did you type every field in the form?'
            })
        }
    }

    return (
        <>
        <NewNavbar/>
        <div className="Page col-xs">
        <Container id="FormContainer">
            <h1 className="text-center"> Add Product </h1>
                <Form  onSubmit={handleSubmit}>
                <div id="Add-Product"className="Add-Product">
                    <Form.Group as={Col} className="Product-Name">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control id="Block1Item"
                        type="text"
                        placeholder="Enter product name"
                        name="title"
                        value={productTitle}
                        onChange={handleProductTitleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="Product-Description">
                        <Form.Label>Product Description </Form.Label>
                        <Form.Control id="Block1Item"
                        type="text"
                        placeholder="Enter product description"
                        name="description"
                        value={productDescription}
                        onChange={handleProductDescriptionChange}/>
                    </Form.Group>
                </div>
                <div id="Block2" className="mb-3">
                    <Form.Group as={Col} className="Product-Price">
                        <Form.Label> Product Price </Form.Label>
                        <Form.Control id="Block2Item"
                        type="number"
                        placeholder="Enter product price"
                        name="price"
                        value={productPrice}
                        onChange={handleProductPriceChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="Difficulty-Level">
                        <Form.Label> Select Product Difficulty Level </Form.Label>
                        <Form.Select id="Block2Item"
                        name="difficulty"
                        onChange={handleProductDifficultyChange}>
                            <option value="Easy">Easy</option>
                            <option value="Normal">Normal</option>
                            <option value="Hard">Hard</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} className="Number-Players">
                        <Form.Label> Product Number of Players </Form.Label>
                        <Form.Control id="Block2Item"
                        type="number"
                        placeholder="Enter product max number of players"
                        name="players"
                        value={productPlayers}
                        onChange={handleProductPlayersChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="Game-Duration">
                        <Form.Label> Game Duration </Form.Label>
                        <Form.Control id="Block2Item"
                        type="number"
                        placeholder="Enter average game duration"
                        name="duration"
                        value={productDuration}
                        onChange={handleProductDurationChange}/>
                    </Form.Group>
                </div>
                <div id="Block3" className="Product-Publisher">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Publisher </Form.Label>
                        <Form.Control id="Block3Item"
                        type="text"
                        placeholder="Product Publisher"
                        name="publisher"
                        value={productPublisher}
                        onChange={handleProductPublisherChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="Recommended-Age">
                        <Form.Label> Recommended age </Form.Label>
                        <Form.Control id="Block3Item"
                        type="number"
                        placeholder="Product recommended age"
                        name="age"
                        value={productAge}
                        onChange={handleProductAgeChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="Main-Genre">
                        <Form.Label> Product Genre </Form.Label>
                        <Form.Control id="Block3Item"
                        type="text"
                        placeholder="Product main genre"
                        name="genre"
                        value={productGenre}
                        onChange={handleProductGenreChange}/>
                    </Form.Group>
                </div>
                    <Form.Group className="Product-Image">
                        <Form.Label> Product Image </Form.Label>
                        <Form.Control
                        type="file"
                        placeholder="Attach product image"
                        name="image"
                        onChange={handleProductImageChange}/>
                    </Form.Group>
                    <Button  id ="NewProductButton" type="submit">
                        Submit
                    </Button>
                </Form>
        </Container>
        </div>
        <Footer/>
        </>
    );
}

export default NewProduct;


