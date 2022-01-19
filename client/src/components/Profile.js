import { Button, CardGroup} from 'react-bootstrap'
import React, {useState} from "react";
import AddPetModal from "./AddPetModal"
import PetCards from "./PetCards"




function Profile({user, dogs, setDogs}) {
  const [modalShow, setModalShow] = useState(false);

  



  const deleteHandler = (id) => {
    const filteredDogs = dogs.filter(dog => dog.id !== id)
    console.log(filteredDogs)
    setDogs([...filteredDogs])
    fetch(`/dogs/${id}`,{
      method: 'DELETE'
    })

  }


  const handleUpdateDog =(updatedDog) => {
    const updatedDogs = dogs.map((dog) => dog.id === updatedDog.id ? updatedDog : dog);
    setDogs(updatedDogs)
  }

  



    return (
      <div className="container d-flex flex-column image-list">
        <br/>
        {/* addpet modal and button */}
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Pet
        </Button>
        <br/>

        <AddPetModal
          setDogs={setDogs}
          dogs={dogs}
          user={user}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {dogs ?
        <CardGroup>
          {dogs.map((dog) => {return (<PetCards key={dog.id} dog={dog} deleteHandler={deleteHandler} handleUpdateDog={handleUpdateDog}/>)})  }
        </CardGroup>
        : null}


      </div>
    );
  }
  
  export default Profile;
  