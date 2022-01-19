import { Form, Button, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useHistory, Link } from "react-router-dom"

function Signup({setCurrentUser}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    };

    fetch("/signup", configObj)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
        })
        //reroutes to home landing page
        history.push("/"); 
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };




    return (
      <div className="text-center d-flex flex-column align-items-center">
        <br/>
        <h1>Create Your Account</h1>
        <br/>
        <Col lg={4}>


          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control placeholder="Name" type="text" name="name" value={formData.name} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control placeholder="Username" type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control placeholder="Password" type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control placeholder="Email" type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control placeholder="Phone Number Format: 1234567890" type="text" name="phone" value={formData.phone} onChange={(e) => handleChange(e)} />
            </Form.Group>

            <br/>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        </Col>
        <br/>

        <Link to="/">Back to Log in Page</Link>


      </div>
    );
  }
  
  export default Signup;
  