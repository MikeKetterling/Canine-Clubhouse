// import PetCards from "./petcards"
import {Card, Button, CardGroup, ButtonGroup, Modal} from 'react-bootstrap'
import React, {useState, useEffect} from "react";
import AddPetModal from "./AddPetModal"



function Profile({user}) {
  const [modalShow, setModalShow] = useState(false);
  const [dogs, setDogs] = useState([])
  

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

  console.log(dogs)


    return (
      <div>
        {/* add pet modal and button */}
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



      </div>
    );
  }
  
  export default Profile;
  