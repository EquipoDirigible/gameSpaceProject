import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
// import {ListGroup, ListGroupItem} from 'react-bootstrap';


const MoreDetails = ({show, handleClose, product} ) =>{
console.log(product)
  
    return(
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        <Modal.Title> {product.price} - {product.title}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Card className="text-center" style={{ width: '90%'}} border="light">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                          <Card.Text>
                           <p>  {product.description}  </p>
                           <p> Difficulty level: {product.difficulty} </p>
                           <p> Average game-time: {product.duration} </p> 
                           <p> Maximum number of players: {product.players} </p> 
                          </Card.Text>
                        </Card.Body>
                  </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>)
};

export default MoreDetails;