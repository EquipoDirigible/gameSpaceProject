import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'; 

const NewProduct = () => {

    const [data, setData] = useState({title: "", description:"", price:"", difficulty:"", duration:"", players:"", image:"" })

    const handleChange=((target) => {
        console.log('Loading');
    })

    return (
        <Container> 
            <h1 className="text-center"> Add Product </h1> 
                <Form>
                    <Form.Group controlId="formBasicEmail" className="mb-3">  
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter product name" name="title" value={data.title} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Description </Form.Label>
                        <Form.Control type="text" placeholder="Enter product description" name="description" value={data.description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Price </Form.Label>
                        <Form.Control type="text" placeholder="Enter product price" name="price" value={data.price} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail"> 
                        <Form.Label> Product Difficulty Level </Form.Label>
                            <Form.Select aria-label="Set select example">
                                <option name="difficulty" value={data.difficulty.easy}>Easy</option>
                                <option name="difficulty" value={data.difficulty.normal}>Normal</option>
                                <option name="difficulty" value={data.difficulty.hard}>Hard</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Number of Players </Form.Label>
                        <Form.Control type="text" placeholder="Enter product max number of players" name="players" value={data.description} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Game Duration </Form.Label>
                        <Form.Control type="text" placeholder="Enter average game duration" name="duration" value={data.duration}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Image </Form.Label>
                        <Form.Control type="file" placeholder="Attach product image" name="image" value={data.image}/>
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                        Submit
                    </Button>
                </Form> 
        </Container>
    )
}

export default NewProduct