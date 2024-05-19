// ETrains.js
import React, { useState } from 'react';
import '../styles/BookingPage.css'; // Make sure to adjust the path according to your project structure

const BookingPage = () => {
  const [formData, setFormData] = useState({
    trainnumber: '',
    seats: '',
    departure: '',
    returnDate: '',
    adults: '',
    children: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: Check if any field is empty
    if (Object.values(formData).some(value => value === '')) {
      alert("Please fill out all required fields");
    } else {
      console.log(formData); // Here you would typically send the data to a server or process it further
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="hd">ExpressTickets Booking</h1>
      </header>

      <div className="container" id="main">
        <div className="design-container">
          <div className="colour-1">
            <form className="tab" onSubmit={handleSubmit}>
              <label htmlFor="trainnumber">Train Number:</label>
              <input type="text" name="trainnumber" id="trainnumber" placeholder="Enter Train Number" onChange={handleChange} />

              <label htmlFor="seats">Number of Seats:</label>
              <input type="number" name="seats" id="seats" placeholder="Enter Number of Seats" onChange={handleChange} />

              <label htmlFor="departure">Departure Date:</label>
              <input type="date" name="departure" id="departure" onChange={handleChange} />

              <label htmlFor="returnDate">Return Date:</label>
              <input type="date" name="returnDate" id="returnDate" onChange={handleChange} />

              <label htmlFor="adults">Number of Adults:</label>
              <input type="number" name="adults" id="adults" placeholder="Enter Number of Adults" onChange={handleChange} />

              <label htmlFor="children">Number of Children:</label>
              <input type="number" name="children" id="children" placeholder="Enter Number of Children" onChange={handleChange} />

              <h2>Passenger Details</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} />
              </div>

              <label htmlFor="gender">Gender:</label>
              <select name="gender" id="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <label htmlFor="travelClass">Travel Class:</label>
              <select name="travelClass" id="travelClass" onChange={handleChange}>
                <option value="">Select Travel Class</option>
                <option value="coach">Third Class  AC</option>
                <option value="coach">First Class  AC</option>
                <option value="coach">Second Class  AC</option>
                <option value="coach">General</option>
                <option value="coach">Sleeper</option>
                {/* Add options here */}
              </select>

              <h2>Other Preferences</h2>
              <label>
                <input type="checkbox" name="autoUpgrade" id="autoUpgrade" onChange={handleChange} />
                Consider for auto Upgradation
              </label>

              <label>
                <input type="checkbox" name="bookIfConfirmed" id="bookIfConfirmed" onChange={handleChange} />
                Book only if confirmed berths are allotted
              </label>

              <h2>Payment Mode</h2>
              <label>
                <input type="checkbox" name="creditDebit" id="creditDebit" onChange={handleChange} />
                Pay through Credit/Debit Cards/Net Banking/Bharat QR/Pay on delivery
              </label>

              <label>
                <input type="checkbox" name="bhimUPI" id="bhimUPI" onChange={handleChange} />
                Pay through BHIM/UPI
              </label>

              <input type="submit" value="Book Now" />
            </form>
          </div>
        </div>
      </div>
      <footer>
        <p>Terms of Service | Privacy Policy | © 2024 ExpressTickets</p>
      </footer>
    </div>
  );
};

export default BookingPage;
