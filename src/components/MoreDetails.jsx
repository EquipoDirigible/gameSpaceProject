import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import "./stylesheets/MoreDetails.css";
// import {ListGroup, ListGroupItem} from 'react-bootstrap';


const MoreDetails = ({show, handleClose, product} ) =>{
console.log(product)
  
    return(
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        <Modal.Title id="ProductTitle"> {product.price} - {product.title}  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Card className="text-center" style={{ width: '90%'}} border="light">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                          <Card.Text>
                           <p>  {product.description}  </p>
                           <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td><strong>Editorial</strong></td>
                                  <td>EDITORIAL CALL HERE</td>
                                </tr>
                                <tr>
                                  <th><strong>Difficulty</strong></th>
                                  <th>{product.difficulty}</th>
                                </tr>
                              
                              
                                <tr>
                                  <td><strong>Average game-time</strong></td>
                                  <td>{product.duration} min</td>
                                </tr>
                                <tr>
                                  <td><strong>Max number of players</strong></td>
                                  <td>{product.players}</td>
                                </tr>
                              </tbody>
                            </Table>
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