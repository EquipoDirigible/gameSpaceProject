import React , { useState } from 'react';
import {Card , Button} from 'react-bootstrap';
import MoreDetails from './MoreDetails';
import './stylesheets/ProductCard.css';  
import { BsGearWide } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';



const ProductCard = ({product, handleDelete, handleUpdate}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
    <>
    <div className="col-md-4">
            <MoreDetails show={show} handleClose={handleClose} product={product}/> 
        <Card id="CardBackground" style={{ width: '17.rem'}}> 
            <div id="CardHeader"><Card.Header className="text-center text-uppercase card-header"> 
                {product.price}€ - {product.title}
            </Card.Header></div>
                <img src={product.image} alt={product.title} className="card-img-top image-card"/> 
            <Card.Body> 

                <div /*className="d-grid gap-2"*/ className="ButtonMethod"> 
                    <Button className="Method" variant="secondary" onClick={() => handleUpdate(product)}><BsGearWide /></Button>  
                    <Button className="Method" variant="secondary" onClick={() => handleDelete(product.id)}> <BsFillXCircleFill /></Button> 
                    <Button className="Method" variant="secondary"> <BsStarFill /> </Button>     
                </div>
                              
            <div id="CardFooter"><Card.Footer className="text-muted, text-center">Last update: 1 month ago </Card.Footer></div>
            <Button variant="secondary" onClick={handleShow}>More details </Button> 
            </Card.Body>
        </Card>
    </div>
    </> )}



export default ProductCard ;
