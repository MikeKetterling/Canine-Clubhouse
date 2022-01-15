import {Card, Button, CardGroup, ButtonGroup, Modal, Form,} from 'react-bootstrap'
import React, {useState, useEffect} from "react";
import AddPetModal from "./AddPetModal"
import PetCards from "./PetCards"




function Profile({user}) {
  const [modalShow, setModalShow] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [dogs, setDogs] = useState([])
  const [updateDogData, setUpdateDogData] = useState({
    name:'',
    age:'',
    breed:'',
    gender:'',
    weight:'',
    image:'',
    user_id:(user? user.id: '')
})

  

  //fetch all dogs for user
  useEffect(() => {
    fetch("/dogs").then((resp) => {
      if (resp.ok) {
        resp.json().then((dog) => {
          setDogs(dog);
        });
      }
    });
  }, []);

  function handleShowUpdate(name, age, breed, gender, weight, image, id, user_id) {
    setUpdateDogData({
        name: name,
        age: age,
        breed: breed,
        gender: gender,
        weight: weight,
        image: image,
        id: id,
        user_id: user_id,

    })
    setShowUpdateForm(true)
  }

  function handleCloseUpdate() {
    setShowUpdateForm(false)
  }

  function changeUpdateHandler(e) {
    setUpdateDogData({
        ...updateDogData,
        [e.target.name]: e.target.value
    });
  }

  function editHandler() {
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
            handleCloseUpdate()
        })
    }
  



    return (
      <div>
        {/* addpet modal and button */}
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Pet
        </Button>
        <AddPetModal
          setDogs={setDogs}
          dogs={dogs}
          user={user}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <CardGroup>
          {dogs.map((dog) => {return (<PetCards key={dog.id} dog={dog} handleShowUpdate={handleShowUpdate}/>)})  }
        </CardGroup>

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

      </div>
    );
  }
  
  export default Profile;
  