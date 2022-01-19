import { Button, Card} from 'react-bootstrap'

import {NavLink} from "react-router-dom"

function Confirmation({appt, user}) {

const dog = appt.dog.name
const service = appt.service.name
const groomer = appt.groomer.name





    return (
      <div className="text-center  flex-column align-items-center">
        
        <Card>
          <Card.Header as="h5">Confirmation</Card.Header>
          <Card.Body>
            <Card.Title>Hello {user.name}!</Card.Title>
            <Card.Text>
              Below are the details of your last booking:
              <br/>
              Your Grooming appointment for {dog}, will begin at {appt.start.slice(0,10)} with {groomer}. 
              {dog} will have {service} service completed by {appt.end.slice(0,10)}.
              <br/>
              Thank You!
            </Card.Text>
            <Button as={NavLink} to={"/home"} variant="primary">Return to Home Page</Button>
          </Card.Body>
        </Card>

      </div>
    );
  }
  
  export default Confirmation;
  