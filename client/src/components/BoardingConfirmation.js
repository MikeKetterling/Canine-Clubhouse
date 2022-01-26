import { Button, Card} from 'react-bootstrap'

import {NavLink} from "react-router-dom"

function BoardingConfirmation({brdAppt, user}) {

const dog = brdAppt.dog.name
const room = brdAppt.room.name





    return (
      <div className="text-center  flex-column align-items-center">
        
        <Card>
          <Card.Header as="h5">Confirmation</Card.Header>
          <Card.Body>
            <Card.Title>Hello {user.name}!</Card.Title>
            <Card.Text>
              Below are the details of your last booking:
              <br/>
              Your Boarding appointment for {dog}, will begin on {brdAppt.start.slice(0,10)}, at {brdAppt.start.slice(11,16)}. 
              <br/> 
              {dog} will stay in our {room} room, and be ready for pick up on {brdAppt.end.slice(0,10)}, at {brdAppt.end.slice(11,16)}.
              <br/>
              Thank You!
            </Card.Text>
            <Button as={NavLink} to={"/home"} variant="primary">Return to Home Page</Button>
          </Card.Body>
        </Card>

      </div>
    );
  }
  
  export default BoardingConfirmation;
  