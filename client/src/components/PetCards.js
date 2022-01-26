import {Card, Button, Form, Modal, ListGroup, ListGroupItem} from 'react-bootstrap'
import React, {useState} from "react";
// import UpdatePetModal from './UpdatePetModal'


function PetCard({dog, deleteHandler, handleUpdateDog}) {
  // const [updateModalShow, setUpdateModalShow] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [updateDogData, setUpdateDogData] = useState({
    name:'',
    age:'',
    breed:'',
    gender:'',
    weight:'',
    image:'',
  })

  function changeUpdateHandler(e) {
    setUpdateDogData({
        ...updateDogData,
        [e.target.name]: e.target.value
    });
  }



  function handleCloseUpdate() {
    setShowUpdateForm(false)
  }

  const handleShowUpdate = () => {
    setUpdateDogData({
        name: dog.name,
        age: dog.age,
        breed: dog.breed,
        gender: dog.gender,
        weight: dog.weight,
        image: dog.image,
        id: dog.id,

    })
    setShowUpdateForm(true)
  }


  function editHandler(e) {
    e.preventDefault()

        fetch(`/dogs/${updateDogData.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateDogData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            handleUpdateDog(data)
            handleCloseUpdate()
        })
  }


    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{ height: '22rem' }} variant="top" src={dog.image} />
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{dog.name} Age: {dog.age}</ListGroupItem>
            <ListGroupItem>{dog.name} Breed: {dog.breed}</ListGroupItem>
            <ListGroupItem>{dog.name} Gender: {dog.gender}</ListGroupItem>
            <ListGroupItem>{dog.name} Weight: {dog.weight} lbs</ListGroupItem>
          </ListGroup>
          <Card.Body>
            {/* update button and handlers */}
          <Button id='edit-btn' variant="primary" onClick={(e) => handleShowUpdate(e)}>Edit Dog Details</Button>
          {/* <UpdatePetModal
          show={updateModalShow}
          handleShowUpdate={handleShowUpdate}
          onHide={() => setUpdateModalShow(false)}
          /> */}
          <Modal show={showUpdateForm} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editHandler}>
                        <Form.Text className='invalid-input' >Dog Name</Form.Text>
                        <Form.Control type="text" name="name" placeholder="Dog Name" onChange={changeUpdateHandler} value={updateDogData.name}/>
                        {/* {updateForm.name !== '' ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a name.</Form.Text>} */}
                        <Form.Text className='invalid-input' >Dog Age</Form.Text>
                        <Form.Control type="number" name="age" placeholder="Dog Age" onChange={changeUpdateHandler} value={updateDogData.age}/>
                        {/* {updateForm.description !== '' ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a description.</Form.Text>} */}
                        <Form.Text className='invalid-input' >Dog Breed</Form.Text>
                        <Form.Control type="text" name="breed" placeholder="Dog Breed" onChange={changeUpdateHandler} value={updateDogData.breed}/>
                        {/* {updateForm.location !== '' ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a location.</Form.Text>} */}
                        <Form.Text className='invalid-input' >Dog Gender</Form.Text>
                        <Form.Control type="text" name="gender" placeholder="Dog Gender" onChange={changeUpdateHandler} value={updateDogData.gender}/>
                        {/* {updateForm.date !== '' ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a date.</Form.Text>} */}
                        <Form.Text className='invalid-input' >Dog weight</Form.Text>

                        <Form.Control type="number" name="weight" placeholder="Dog Weight" onChange={changeUpdateHandler} value={updateDogData.weight}/>
                        <Form.Text className='invalid-input' >Dog Image</Form.Text>

                        <Form.Control type="text" name="image" placeholder="Dog Image" onChange={changeUpdateHandler} value={updateDogData.image}/>
                        <Button type="submit" value="submit" variant="primary">
                        Edit Pet
                        </Button>

                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseUpdate}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* delete buttons */}
          <Button id='delete-btn' variant="danger" onClick={() => deleteHandler(dog.id)}>Remove Dog</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
  
  export default PetCard;
  