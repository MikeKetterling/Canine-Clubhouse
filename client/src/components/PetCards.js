import {Card, Button, CardGroup, ButtonGroup, Modal, ListGroup, ListGroupItem} from 'react-bootstrap'
import React, {useState, useEffect} from "react";
import UpdatePetModal from './UpdatePetModal'


function PetCard({dog, deleteHandler, handleShowUpdate}) {
  const [updateModalShow, setUpdateModalShow] = useState(false);

console.log(dog)

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dog.image} />
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{dog.name} Age: {dog.age}</ListGroupItem>
            <ListGroupItem>{dog.name} Breed: {dog.breed}</ListGroupItem>
            <ListGroupItem>{dog.name} Gender: {dog.gender}</ListGroupItem>
            <ListGroupItem>{dog.name} Weight: {dog.weight} lbs</ListGroupItem>
          </ListGroup>
          <Card.Body>
          <Button id='edit-btn' variant="primary" onClick={() => handleShowUpdate(dog.name, dog.age, dog.breed, dog.gender, dog.weight, dog.image, dog.id)}>Edit Dog Details</Button>
          {/* <UpdatePetModal
          show={updateModalShow}
          handleShowUpdate={handleShowUpdate}
          onHide={() => setUpdateModalShow(false)}
          /> */}
          <Button id='delete-btn' variant="danger" onClick={() => deleteHandler(dog.id)}>Remove Dog</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
  
  export default PetCard;
  