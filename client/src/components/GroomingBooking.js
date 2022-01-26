import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import {useHistory, NavLink} from "react-router-dom"



function GroomingBooking({groomers, services, dogs, setConfirmationService}) {
  const history = useHistory();

  const [groomingData, setGroomingData] = useState({
    start:'',
    end:'',
    service_id:'',
    dog_id:'',
    groomer_id:'',
    })

    const handleChange = (e) => {
      console.log(e.target)
      setGroomingData({...groomingData, [e.target.name]:e.target.value})
    }



  const handleSubmit = (e) => {
    e.preventDefault()
    const postConfig = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(groomingData)
    };
    fetch('/service_appointments', postConfig)
    .then(resp => resp.json())
    .then(newAppt => {
      setGroomingData({
        start:'',
        end:'',
        service_id:'',
        dog_id:'',
        groomer_id:'',
      })
      setConfirmationService(newAppt)
      history.push("/grooming/confirmation");

    })
  }



    return (
      <div className="text-center d-flex flex-column align-items-center">
        <br/>
        <h1>Book Grooming Appt</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control as='select' name="service_id" onChange={handleChange}>
            <option>CHOOSE SERVICE TYPE</option>
            {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Form.Control>

          <Form.Control as='select' name="groomer_id" onChange={handleChange}>
          <option>CHOOSE GROOMER</option>
            {groomers.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </Form.Control>

          <Form.Control as='select' name="dog_id" onChange={handleChange}>
          <option>CHOOSE YOUR DOG</option>
            {dogs.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </Form.Control>

          <Form.Control type="datetime-local" name="start" onChange={handleChange} value={groomingData.start}/>

          <Form.Control type="datetime-local" name="end" onChange={handleChange} value={groomingData.end}/>


           
          <br/>

          <Button variant="primary" type="submit">Book Appt</Button>
        </Form>
        <br/>
        <Button as={NavLink} to={"/grooming"} variant="primary">Back to Grooming Information</Button>

      </div>
    );
  }
  
  export default GroomingBooking;
  