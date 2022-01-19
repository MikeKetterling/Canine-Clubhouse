import React, {useState} from "react";
import DateTimePicker from 'react-datetime-picker';
import DatePicker from "react-datepicker";
import {Form, Button} from 'react-bootstrap'
import {useHistory, Link, NavLink} from "react-router-dom"



function GroomingBooking({groomers, services, dogs}) {
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
    })
    history.push("/confirmation");
  }



    return (
      <div className="GroomingBooking">
        <Form onSubmit={handleSubmit}>
          <Form.Control as='select' name="service_id" onChange={handleChange}>
            {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </Form.Control>

          <Form.Control as='select' name="groomer_id" onChange={handleChange}>
            {groomers.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </Form.Control>

          <Form.Control as='select' name="dog_id" onChange={handleChange}>
            {dogs.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </Form.Control>

          <Form.Control type="date" name="start" onChange={handleChange} value={groomingData.start}/>

          <Form.Control type="date" name="end" onChange={handleChange} value={groomingData.end}/>


           
           
            <input type="submit" value="submit"/>
        </Form>
        <br/>
        <br/>
        <Button as={NavLink} to={"/grooming"} variant="primary">Back to Grooming Information</Button>

      </div>
    );
  }
  
  export default GroomingBooking;
  