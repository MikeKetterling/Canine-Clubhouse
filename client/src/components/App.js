// import '../App.css';
import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



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



  return (
    <div className="App">
      <Switch>
        <Route path="/login">
        </Route>

        <Route path="/signup">
        </Route>

        <Route path="/home">
        </Route>

        <Route path="/boarding">
        </Route>

        <Route path="/grooming">
        </Route>

        <Route path="/profile">
        </Route>

        <Route path="/about">
        </Route>

        <Route exact path="/boarding/booking">
        </Route>

        <Route exact path="/grooming/booking">
        </Route>

        <Route path="/payment">
        </Route>

        <Route path="/confirmation">
        </Route>

        <Route path="/404">
        </Route>

      </Switch>
    </div>
  );
}

export default App;
