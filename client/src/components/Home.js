import {Card, Button, CardGroup, ButtonGroup} from 'react-bootstrap'
import {NavLink} from "react-router-dom"




function Home() {
    return (
      <div className="container d-flex flex-column image-list">


          <CardGroup>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height: '21rem'}} variant="top" src="https://spawpetgrooming.com/files/2020/04/spaw.jpg" />
              <Card.Body>
                <Card.Title>Grooming</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <ButtonGroup>
                  <Button as={NavLink} to={"/grooming"} variant="primary">Grooming Info</Button>
                  <Button as={NavLink} to={"/grooming/booking"} variant="primary">Book Grooming</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
  


            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height: '21rem'}} variant="top" src="https://woodlandsdogboarding.com/wp-content/uploads/2015/09/dog-boarding-woodlands1.jpg" />
              <Card.Body>
                <Card.Title>Boarding</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <ButtonGroup>
                  <Button as={NavLink} to={"/boarding"} variant="primary">Boarding Info</Button>
                  <Button as={NavLink} to={"/boarding/booking"} variant="primary">Book Boarding</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
            </CardGroup>


        
      </div>
    );
  }
  
  export default Home;
  