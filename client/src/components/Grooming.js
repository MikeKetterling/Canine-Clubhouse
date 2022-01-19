import { Button, Accordion, Tab, Row, Col, ListGroup, Nav} from 'react-bootstrap'
import {NavLink, Link} from "react-router-dom"

function Grooming({groomers, services}) {

  const serviceNavLink = services.map((s) => <Nav.Link key={s.id} eventKey={s.id}>{s.name}</Nav.Link> )
  const serviceTabPane = services.map((s) => <Tab.Pane key={s.id} eventKey={s.id}>$ {s.price}</Tab.Pane>)

  const groomerNavLink = groomers.map((g) => <Nav.Link key={g.id} eventKey={g.id}>{g.name}</Nav.Link> )
  const groomerTabPane = groomers.map((g) => <Tab.Pane key={g.id} eventKey={g.id}>{g.experience} years of experience</Tab.Pane>)




    return (
      <div className="text-center  flex-column align-items-center">
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
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        {serviceNavLink}
                      </Nav.Item>
                    </Nav>
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
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        {groomerNavLink}
                      </Nav.Item>
                    </Nav>
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

      </div>
    );
  }
  
  export default Grooming;
  