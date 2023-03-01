import React, { useEffect , useState} from 'react';
import {Card , ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './stylesheets/image-card.css';  
import { handleDelete } from './DeleteProduct';


const ProductCard = ({product}) => {
    

    return (
        <div className="col-3">
            <Card border="light" style={{ width: '18rem' }}> 
            <Card.Header className="text-center text-uppercase card-header"> 
                        {product.price} - {product.title}
                    </Card.Header>
                <img src={product.image} alt={product.title} className="card-img-top image-card"/> 
                <Card.Body> 
                    <div className="d-grid gap-2"> 
                        <Button variant="secondary"> Edit </Button>  
                        <Button variant="secondary" onClick={() => handleDelete(product.id)}> Delete </Button> 
                        <Button variant="secondary"> Favorite </Button> 
                    </div>
                    <ListGroup> 
                        <ListGroupItem> <strong> </strong> {product.description}</ListGroupItem>
                        {/* <ListGroupItem> <stron> Difficulty: </stron> {product.difficulty}</ListGroupItem>
                        <ListGroupItem> <stron>Price 🇪🇺: </stron> {product.price}</ListGroupItem>
                        <ListGroupItem> <stron> Game time in minutes: </stron> {product.duration}</ListGroupItem>
                        <ListGroupItem> <stron> Max number of players: </stron> {product.players}</ListGroupItem> */}
                            <Button variant="dark">More details </Button>
                            <Card.Footer className="text-muted, text-center">Last update: 1 month ago</Card.Footer>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

                    
export default ProductCard 