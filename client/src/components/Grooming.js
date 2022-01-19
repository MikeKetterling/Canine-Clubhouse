import {Card, Button, CardGroup, ButtonGroup, Accordion, Tab, Row, Col, ListGroup} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

function Grooming({groomers, services}) {

const serviceListItem = services.map((s) => <ListGroup.Item action href={`#${s.id}`}>{s.name}</ListGroup.Item> )
const serviceTabPane = services.map((s) => <Tab.Pane eventKey={`#${s.id}`}>$ {s.price}</Tab.Pane>)

const groomerListItem = groomers.map((g) => <ListGroup.Item action href={`#${g.id}`}>{g.name}</ListGroup.Item> )
const groomerTabPane = groomers.map((g) => <Tab.Pane eventKey={`#${g.id}`}>{g.experience} years of experience</Tab.Pane>)


    return (
      <>
        <br/>
        <br/>
        <h1>Grooming Information</h1>
        <br/>

        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>General Grooming Info</Accordion.Header>
            <Accordion.Body>
              Need to get rid of the puppy smell? We're here to help!  Our services have been 
              developed and refined to focus on your dogs care and happiness, 
              and our groomers have been trained rigiourosly in both attention to detail and dog care.  
              We strive to make Canine Clubhouse a second home for your pets and family.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Our Services</Accordion.Header>
            <Accordion.Body>
              <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                  <Col sm={4}>
                    <ListGroup>
                      {serviceListItem}
                    </ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      {serviceTabPane}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Our Groomers</Accordion.Header>
            <Accordion.Body>
              <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                  <Col sm={4}>
                    <ListGroup>
                      {groomerListItem}
                    </ListGroup>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      {groomerTabPane}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br/>
        <Button as={NavLink} to={"/grooming/booking"} variant="primary">Book Grooming</Button>

      </>
    );
  }
  
  export default Grooming;
  