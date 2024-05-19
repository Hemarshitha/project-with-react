// MainPage.jsx
import React, { useState } from 'react'; // Import useState
import '../styles/MainPage.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <a href="/login"><img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="Profile" /></a>
      <h1>ExpressTickets</h1>
      <p>Your Destination for Hassle-Free Train Ticket Booking</p>
    </header>
  );
}
function MainContent() {
  return (
    <main>
        <section id="search">
            <h2 className="glow">Book Your Train Tickets with Ease</h2>
            <BookingForm /> {/* Use the BookingForm component */}
        </section>

        <section id="why-choose">
            <h2 className="glow">Why Choose ExpressTickets?</h2>
            <List>
                <ListItem>Convenience: Book your tickets online from the comfort of your home.</ListItem>
                <ListItem>Wide Coverage: We offer tickets for trains across various destinations.</ListItem>
                <ListItem>Affordable Prices: Enjoy competitive prices and great deals on your bookings.</ListItem>
                <ListItem>Secure Payments: Your transactions are safe and secure with us.</ListItem>
            </List>
        </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>Terms of Service | Privacy Policy | © 2024 ExpressTickets</p>
    </footer>
  );
}

function Section({ children }) {
  return <section>{children}</section>;
}

function List({ children }) {
  return <ul>{children}</ul>;
}

function ListItem({ children }) {
  return <li>{children}</li>;
}
function MyFormComponent() {
    const navigate = useNavigate();
}
function BookingForm() {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Validation
      if (departure.trim() === "") {
        alert("Please enter departure city.");
        return;
      }
  
      if (destination.trim() === "") {
        alert("Please enter destination city.");
        return;
      }
  
      if (date.trim() === "") {
        alert("Please select date.");
        return;
      }
  
      if (passengers.trim() === "" || isNaN(passengers) || passengers <= 0) {
        alert("Please enter a valid number of passengers.");
        return;
      }
  
      navigate('/train', {replace: true});
    };

    return (
      <form id="booking-form" onSubmit={handleSubmit}>
        <input type="text" id="departure" placeholder="Departure City" value={departure} onChange={(e) => setDeparture(e.target.value)} required />
        <input type="text" id="destination" placeholder="Destination City" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        <input type="date" id="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="number" id="passengers" placeholder="Number of Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} required />
        <button type="submit">Search</button>
      </form>
    );
}

export default MainPage; // Corrected placement of export statement
