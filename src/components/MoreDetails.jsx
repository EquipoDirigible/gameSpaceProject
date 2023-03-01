import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const MoreDetails = ({show, handleClose}) =>{


    return(
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>TITLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                      <Card style={{ width: '90%' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        DESCRIPTION
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