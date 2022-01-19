import { Button, Card, ButtonGroup, ListGroup} from 'react-bootstrap'
import { NavLink} from "react-router-dom"

function About() {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <br/>
      <Card style={{ width: '505px'}}>
        <Card.Img style={{height: '360px', width: '500px'}} variant="top" src="http://tworockdogranch.com/wp-content/uploads/2014/12/Big-dog-lineup-500x360.jpeg" />
        <Card.Body>
          <Card.Title>About Canine Clubhouse</Card.Title>
          <Card.Text>
            We strive to make your pets ours, and our home their second.  While they are here at Canine Clubhouse they will recieve every amenity.  Continue to browse our site and reach out with any questions!
          </Card.Text>
          <ButtonGroup>
            <Button as={NavLink} to={"/boarding"} variant="primary">Boarding Info</Button>
            <Button as={NavLink} to={"/grooming"} variant="primary">Grooming Info</Button>
          </ButtonGroup>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Email: email@email.com</ListGroup.Item>
          <ListGroup.Item>Phone: 123-456-7890</ListGroup.Item>
          <ListGroup.Item>Address: someAddress 123, someCity, someState, someZip</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default About;
