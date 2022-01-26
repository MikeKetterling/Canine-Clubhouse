import { Button, Accordion, Tab, Row, Col, Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

function Boarding({rooms}) {
  const roomNavLink = rooms.map((s) => <Nav.Link key={s.id} eventKey={s.id}>{s.name} </Nav.Link> )
  const roomTabPane = rooms.map((s) => <Tab.Pane key={s.id} eventKey={s.id}>$ {s.price} <br/> {s.description}</Tab.Pane>)


  return (
    <div className="text-center  flex-column align-items-center">
              <br/>
        <br/>
        <h1>Boarding Information</h1>
        <br/>

        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>General Boarding Info</Accordion.Header>
            <Accordion.Body>
              Need to get rid of the puppy smell? We're here to help!  Our services have been 
              developed and refined to focus on your dogs care and happiness, 
              and our groomers have been trained rigiourosly in both attention to detail and dog care.  
              We strive to make Canine Clubhouse a second home for your pets and family.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Our Boarding Rooms</Accordion.Header>
            <Accordion.Body>
              <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        {roomNavLink}
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      {roomTabPane}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br/>
        <Button as={NavLink} to={"/boarding/booking"} variant="primary">Book Boarding</Button>

    </div>
  );
}

export default Boarding;
