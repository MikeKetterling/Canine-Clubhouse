import { Button, Card} from 'react-bootstrap'

import {NavLink} from "react-router-dom"

function GroomingConfirmation({srvcAppt, user}) {

const dog = srvcAppt.dog.name
const service = srvcAppt.service.name
const groomer = srvcAppt.groomer.name





    return (
      <div className="text-center  flex-column align-items-center">
        
        <Card>
          <Card.Header as="h5">Confirmation</Card.Header>
          <Card.Body>
            <Card.Title>Hello {user.name}!</Card.Title>
            <Card.Text>
              Below are the details of your last booking:
              <br/>
              Your Grooming appointment for {dog}, will begin on {srvcAppt.start.slice(0,10)}, at {srvcAppt.start.slice(11,16)} with {groomer}. 
              <br/> 
              {dog} will have {service} service completed on {srvcAppt.end.slice(0,10)}, at {srvcAppt.end.slice(11,16)}.
              <br/>
              Thank You!
            </Card.Text>
            <Button as={NavLink} to={"/home"} variant="primary">Return to Home Page</Button>
          </Card.Body>
        </Card>

      </div>
    );
  }
  
  export default GroomingConfirmation;
  