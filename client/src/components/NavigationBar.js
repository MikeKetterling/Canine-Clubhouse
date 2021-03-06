import {useHistory, Link, NavLink} from "react-router-dom"
import {Navbar, Container, Nav, Offcanvas, Button} from 'react-bootstrap'

function NavigationBar({setCurrentUser, user, setIsAuthenticated}) {
  const history = useHistory();

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(res => {
          if (res.ok) {
            setCurrentUser(null)
            setIsAuthenticated(false)
            history.push("/"); 
          }
        })
  }

  const handleDelete = (id) => {
    console.log(id)
    fetch(`/users/${id}`,{
      method: 'DELETE'
    })
    setCurrentUser([])
    history.push("/"); 

  }


    return (
      <>
        <Navbar bg="primary" expand={false}>
                <Container fluid>
                    {user ? <Navbar.Brand as={NavLink} to="/home">Canine Clubhouse</Navbar.Brand> : <Navbar.Brand as={NavLink} to="/login">Canine Clubhouse</Navbar.Brand>}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Canine Clubhouse</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        {user ? <h4>Hello {user.name}!</h4> : null}
                        <br/>
                        {user ? <Link to="/home">Home</Link> : null}
                        {user ? <Link to="/profile">Profile</Link> : null}
                        {user ? <Link to="/about">Canine Club Info</Link> : null}
                        {user ? <Link to="/grooming">Grooming</Link> : null}
                        {user ? <Link to="/boarding">Boarding</Link> : null}
                        <br/>
                        <br/>
                        {user ? <Button onClick={handleLogout}>Logout</Button> : null}
                        {user ? <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete Account</Button> : null}

                        
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavigationBar;
  