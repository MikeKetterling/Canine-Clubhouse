// import '../App.css';
import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  // const [groomingAppt, setGroomingAppt] = useState([])





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

    //All GET Fetchs
    useEffect(() => {
      fetch("/dogs")
      .then(resp => resp.json())
      .then(dog => setDogs(dog));
        
  
      fetch("/groomers")
      .then(resp => resp.json())
      .then(data => setGroomers(data))
  
      fetch("/services")
      .then(resp => resp.json())
      .then(data => setServices(data))
    }, []);
  
  // console.log(currentUser);



  return (
    <div className="App">
      <NavigationBar user={currentUser} setCurrentUser ={setCurrentUser}/>
      <Switch>
        <Route path="/login">
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
          <Grooming />
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
          <GroomingBooking dogs={dogs} groomers={groomers} services={services} />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/confirmation">
          <Confirmation />
        </Route>

        <Route path="/404">
          <h1>Error: 404 Page Not Found</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
