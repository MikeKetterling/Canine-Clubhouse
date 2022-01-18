import React, {useState} from "react";
import DateTimePicker from 'react-datetime-picker';

function GroomingBooking({groomers, services, dogs}) {
  const [groomingData, setGroomingData] = useState({
    start:'',
    end:'',
    service_id:'',
    dog_id:'',
    groomer_id:'',
    })

    const handleChange = (e) => {
      setGroomingData({...groomingData, [e.target.name]:e.target.value})
    }



  const handleSubmit = (e) => {
    e.preventDefault()
  }

  console.log(groomers)
  console.log(services)
  console.log(dogs)  


    return (
      <div className="GroomingBooking">
        <form onSubmit={handleSubmit}>
          <label>
            <select name="service_id" onChange={handleChange}>
              <option>Select a Service</option>
               {services.map(s => <option value={s.id}>{s.name}</option>)}
            </select>
          </label>
          <label>
            <select name="groomer_id" onChange={handleChange}>
              <option>Select an Avalable Groomer</option>
               {groomers.map(g => <option value={g.id}>{g.name}</option>)}
            </select>
          </label>
          <label>
            <select name="dog_id" onChange={handleChange}>
              <option>Select an Avalable Groomer</option>
               {dogs.map(d => <option value={d.id}>{d.name}</option>)}
            </select>
          </label>
          <DateTimePicker
            onChange={onChange}
            value={value}
            />            
            {/* <label>
                <input placeholder="ATHLETE IMAGE" type="text" name="image" value={athleteData.image} onChange={handleChange}/>
            </label> */}
           
           
            <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
  
  export default GroomingBooking;
  