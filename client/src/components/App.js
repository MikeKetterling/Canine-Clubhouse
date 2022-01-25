import '../App.css';
import React, {useState, useEffect} from "react";
import {Route, Switch, NavLink} from "react-router-dom";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import NavigationBar from './NavigationBar';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Boarding from './Boarding';
import Grooming from './Grooming';
import BoardingBooking from './BoardingBooking';
import GroomingBooking from './GroomingBooking';
import Profile from './Profile';
import About from './About';
import Payment from './Payment';
import Confirmation from './Confirmation';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [dogs, setDogs] = useState([])
  const [groomers, setGroomers] = useState([])
  const [services, setServices] = useState([])
  const [allGroomingAppt, setAllGroomingAppt] = useState([])
  const [confirmationService, setConfirmationService] = useState([])


  //All GET Fetchs
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/dogs")
    .then(resp => resp.json())
    .then(dog => setDogs(dog));
  }, []);
  
  useEffect(() => {
    fetch("/groomers")
    .then(resp => resp.json())
    .then(data => setGroomers(data))
  }, []);

  useEffect(() => {
    fetch("/service_appointments")
    .then(resp => resp.json())
    .then(data => setAllGroomingAppt(data))
  }, []);

  useEffect(() => {
    fetch("/services")
    .then(resp => resp.json())
    .then(data => setServices(data))
  }, []);



  return (
    <div className="App">
      {isAuthenticated ?
      <NavigationBar user={currentUser} setCurrentUser ={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>
      : null}
      <Switch>
        <Route exact path="/">
          <Login setIsAuthenticated={setIsAuthenticated} setCurrentUser ={setCurrentUser}/>
        </Route>

        <Route path="/signup">
          <Signup setCurrentUser ={setCurrentUser}/>
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/boarding">
          <Boarding />
        </Route>

        <Route exact path="/grooming">
          <Grooming services={services} groomers={groomers}/>
        </Route>

        <Route path="/profile">
          <Profile user={currentUser} dogs={dogs} setDogs={setDogs}/>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/boarding/booking">
          <BoardingBooking />
        </Route>

        <Route exact path="/grooming/booking">
          <GroomingBooking dogs={dogs} groomers={groomers} services={services} setConfirmationService={setConfirmationService}/>
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/confirmation">
          <Confirmation appt={confirmationService} user={currentUser}/>
        </Route>

        <Route path="*">
          <h1>Error: 404 Page Not Found</h1>
          <Button as={NavLink} to={"/"} variant="primary">Back to landing page</Button>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
