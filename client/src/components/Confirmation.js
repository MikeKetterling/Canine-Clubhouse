import {Link} from "react-router-dom"

function Confirmation({appt, user}) {


const dog = appt.dog.name

const service = appt.service.name

const groomer = appt.groomer.name





    return (
      <>
        <h1>Hello {user.name}!</h1>
        <h3>Below are the details of your last booking:</h3>
        <p>Your Grooming appointment for {dog}, will begin at {appt.start.slice(0,10)} with {groomer}.</p>
        <p>{dog} will have {service} service completed by {appt.end.slice(0,10)}.</p>
        <h4>Thank You!</h4>
        
        

        <Link to="/home">Return to Home Page</Link>
      </>
    );
  }
  
  export default Confirmation;
  