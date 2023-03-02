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
        <Modal.Title> {product.price} - {product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Card style={{ width: '90%' }} border="light">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                          {/* <Card.Title>Card Title</Card.Title> */}
                          <Card.Text>
                            {product.description}
                          </Card.Text>
                        </Card.Body>
                  </Card>
        </Modal.Body>
        <Modal.Body> Hi! I'am a message
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>)
};

export default MoreDetails;