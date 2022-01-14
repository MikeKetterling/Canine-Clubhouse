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

  console.log(currentUser);



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

        <Route path="/grooming">
          <Grooming />
        </Route>

        <Route path="/profile">
          <Profile user={currentUser}/>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/boarding/booking">
          <BoardingBooking />
        </Route>

        <Route exact path="/grooming/booking">
          <GroomingBooking />
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
