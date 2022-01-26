import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import {useHistory, NavLink} from "react-router-dom"

function BoardingBooking({rooms, dogs, setConfirmationRoom}) {
  const history = useHistory();

  const [roomData, setRoomData] = useState({
    start:'',
    end:'',
    room_id:'',
    dog_id:'',
    })

    const handleChange = (e) => {
      console.log(e.target)
      setRoomData({...roomData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const postConfig = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(roomData)
      };
      fetch('/room_appointments', postConfig)
      .then(resp => resp.json())
      .then(newAppt => {
        setRoomData({
          start:'',
          end:'',
          room_id:'',
          dog_id:'',
        })
        setConfirmationRoom(newAppt)
        history.push("/boarding/confirmation");
      })
    }
  

    return (
      <div className="text-center d-flex flex-column align-items-center">
        <br/>
        <h1>Book Boarding Appt</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control as='select' name="room_id" onChange={handleChange}>
            <option>CHOOSE YOUR DOGS ROOM</option>
            {rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </Form.Control>

          <Form.Control as='select' name="dog_id" onChange={handleChange}>
          <option>CHOOSE YOUR DOG</option>
            {dogs.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </Form.Control>

          <Form.Control type="datetime-local" name="start" onChange={handleChange} value={roomData.start}/>

          <Form.Control type="datetime-local" name="end" onChange={handleChange} value={roomData.end}/>

          <br/>

          <Button variant="primary" type="submit">Book Appt</Button>
        </Form>
        <br/>
        <Button as={NavLink} to={"/boarding"} variant="primary">Back to Boarding Information</Button>

      </div>
    );
  }
  
  export default BoardingBooking;
  