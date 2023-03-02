import React from 'react'; 

const handleOpen = () => {
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
    const [productImage, setProductImage] = useState("")

    const handleProductTitleChange=((event) => {
        setProductTitle(event.target.value)
    })

    const handleProductDescriptionChange=((event) => {
        setProductDescription(event.target.value)
    })

    const handleProductPriceChange=((event) => {
        setProductPrice(event.target.value)
    })

    const handleProductDifficultyChange=((event) => {
        setProductDifficulty(event.target.value)
    })

    const handleProductPlayersChange=((event) => {
        setProductPlayers(event.target.value)
    })

    const handleProductDurationChange=((event) => {
        setProductDuration(event.target.value)
    })

    const handleProductPublisherChange=((event) => {
        setProductPublisher(event.target.value)
    })

    const handleProductAgeChange=((event) => {
        setProductAge(event.target.value)
    })

    const handleProductGenreChange=((event) => {
        setProductGenre(event.target.value)
    })

    const handleProductImageChange=((event) => {
        const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
            setProductImage(reader.result)};
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
            let editProduct = {
                productTitle, 
                productDescription, 
                productPrice, 
                productDifficulty, 
                productPlayers, 
                productDuration, 
                productPublisher, 
                productAge, 
                productGenre, 
                productImage};
        ProductsHandler.editProduct(id, editedProduct);
                
        const response = await axios.put(URL, editProduct);
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
        <Container>
            <h1 className="text-center"> Edit Product </h1>
                <Form  onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        name="title"
                        value={productTitle}
                        onChange={handleProductTitleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Product Description </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter product description"
                        name="description"
                        value={productDescription}
                        onChange={handleProductDescriptionChange}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Price </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter product price"
                        name="price"
                        value={productPrice}
                        onChange={handleProductPriceChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Select Product Difficulty Level </Form.Label>
                        <Form.Select
                        name="difficulty"
                        onChange={handleProductDifficultyChange}>
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
                        value={productPlayers}
                        onChange={handleProductPlayersChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Game Duration </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Enter average game duration"
                        name="duration"
                        value={productDuration}
                        onChange={handleProductDurationChange}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Publisher </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Product Publisher"
                        name="publisher"
                        value={productPublisher}
                        onChange={handleProductPublisherChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Recommended age </Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="Product recommended age"
                        name="age"
                        value={productAge}
                        onChange={handleProductAgeChange}/>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label> Product Genre </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Product main genre"
                        name="genre"
                        value={productGenre}
                        onChange={handleProductGenreChange}/>
                    </Form.Group>
                </Row>
                    <Form.Group className="mb-3">
                        <Form.Label> Product Image </Form.Label>
                        <Form.Control
                        type="file"
                        placeholder="Attach product image"
                        name="image"
                        value={productImage}
                        onChange={handleProductImageChange}/>
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                        Submit
                    </Button>
                </Form>
        </Container>
    );
}


export default handleOpen;