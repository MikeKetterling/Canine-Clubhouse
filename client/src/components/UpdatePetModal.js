import {Card, Button, CardGroup, ButtonGroup, Modal, Form} from 'react-bootstrap'
import React, {useState, useEffect} from "react";
function UpdatePetModal({show, onHide, user, setDogs, dogs, handleShowUpdate}) {

    
    const handleChange = (e) => {
        // setdogData({...dogData, [e.target.name]:e.target.value})
    }


    function handleSubmit(e) {
        e.preventDefault()
        // const postConfig = {
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify(dogData)
        // };
        // fetch('/dogs', postConfig)
        // .then(res => res.json())
        // .then(newDog => {
        //     setDogs([newDog,...dogs])
        //     setdogData({
        //         name:'',
        //         age:'',
        //         breed:'',
        //         gender:'',
        //         weight:'',
        //         image:'',
        //         user_id:(user ? user.id : '')
        //     })
        // })
        // onHide()
    }

    
    return (
        <>
            
        </>
    );
  }
  
  export default UpdatePetModal;