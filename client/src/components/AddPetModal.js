// import PetCards from "./petcards"
import { Button, Modal, Form} from 'react-bootstrap'
import React, {useState} from "react";



function AddPetModal({show, onHide, user, setDogs, dogs}) {
    const [dogData, setdogData] = useState({
        name:'',
        age:'',
        breed:'',
        gender:'',
        weight:'',
        image:'',
        // pet_image: null,
        user_id:(user? user.id: '')
    })


    const handleChange = (e) => {
        setdogData({...dogData, [e.target.name]:e.target.value})
    }

console.log(dogData)
    function handleSubmit(e) {
        e.preventDefault()
        const postConfig = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(dogData)
        };
        fetch('/dogs', postConfig)
        .then(res => res.json())
        .then(newDog => {
            setDogs([newDog,...dogs])
            setdogData({
                name:'',
                age:'',
                breed:'',
                gender:'',
                weight:'',
                image:'',
                // pet_image: null,
                user_id:(user ? user.id : '')
            })
        })
        onHide()
    }

    
    return (
        <>
            <Modal
                show = {show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Add Pet
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="text" name="name" placeholder="Dog Name" onChange={handleChange} value={dogData.name}/>
                        {/* {hasName ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a name.</Form.Text>} */}
                        <Form.Control type="number" name="age" placeholder="Dog Age" onChange={handleChange} value={dogData.age}/>
                        {/* {hasDescription ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a description.</Form.Text>} */}
                        <Form.Control type="text" name="breed" placeholder="Dog Breed" onChange={handleChange} value={dogData.breed}/>
                        {/* {hasLocation ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a location.</Form.Text>} */}
                        <Form.Control type="text" name="gender" placeholder="Dog Gender" onChange={handleChange} value={dogData.gender}/>
                        {/* {hasDate ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a date.</Form.Text>} */}
                        <Form.Control type="number" name="weight" placeholder="Dog Weight" onChange={handleChange} value={dogData.weight}/>
                        <Form.Control type="text" name="image" placeholder="Dog Image" onChange={handleChange} value={dogData.image}/>

                        {/* <Form.Control type="file" name="pet_image" placeholder="Dog Image Upload" onChange={handleChange} value={dogData.pet_image}/> */}

                        <Button type="submit" value="submit" variant="primary">
                        Create Pet
                        </Button>
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
  }
  
  export default AddPetModal;