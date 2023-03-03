import React , { useState } from 'react';
import {Card , ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import MoreDetails from './MoreDetails';
import './stylesheets/ProductCard.css';  
import { BsGearWide } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
// import {Link} from "react-router-dom";


const ProductCard = ({product, handleDelete, handleUpdate}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <>
    <div className="col-md-4">
            <MoreDetails show={show} handleClose={handleClose} product={product}/> 
        <Card border="light" style={{ width: '17.rem'}}> 
            <Card.Header className="text-center text-uppercase card-header"> 
                {product.price} - {product.title}
            </Card.Header>
                <img src={product.image} alt={product.title} className="card-img-top image-card"/> 
            <Card.Body> 

                <div /*className="d-grid gap-2"*/ className="ButtonMethod"> 
                    <Button className="Method" variant="secondary" onClick={() => handleUpdate(product)}><BsGearWide /></Button>  
                    <Button className="Method" variant="secondary" onClick={() => handleDelete(product.id)}> <BsFillXCircleFill /></Button> 
                    <Button className="Method" variant="secondary"> <BsStarFill /> </Button>     
                </div>
                    
                    {/* <ListGroup>   */}
                         {/* <ListGroupItem> <strong> </strong> {product.description}</ListGroupItem> 
                         <ListGroupItem> <stron> Difficulty: </stron> {product.difficulty}</ListGroupItem>
                        <ListGroupItem> <stron>Price 🇪🇺: </stron> {product.price}</ListGroupItem>
                        <ListGroupItem> <stron> Game time in minutes: </stron> {product.duration}</ListGroupItem>
                        <ListGroupItem> <stron> Max number of players: </stron> {product.players}</ListGroupItem>  */}
                    {/* </ListGroup>  */}
                              
            <Card.Footer className="text-muted, text-center">Last update: 1 month ago </Card.Footer>
            <Button variant="secondary" onClick={handleShow}>More details </Button> 
            </Card.Body>
        </Card>
    </div>
    </> )}


export default ProductCard ;
