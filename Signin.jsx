import React, { useState } from 'react';
import '../styles/Signin.css'; // Assuming you move your CSS here

const Signin = () => {
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [dobError, setDobError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [dob, setDob] = useState(''); // Initialize dob state
    const [gender, setGender] = useState(''); // Initialize gender state

    const handleDobChange = (event) => {
        setDob(event.target.value); // Update dob state on input change
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value); // Update gender state on input change
    };

    const validateForm = (e) => {
        e.preventDefault();
        let dobPattern = /^\d{2}-\d{2}-\d{4}$/;
        if (firstNameError!== '' || lastNameError!== '' || dobError!== '' || genderError!== '') {
            return;
        }
        if (dob.value === '' ||!dobPattern.test(dob.value)) {
            setDobError('Please enter a valid date of birth (dd-mm-yyyy).');
            return;
        } else {
            setDobError('');
        }
        if (!gender) {
            setGenderError('Please select your gender.');
            return;
        } else {
            setGenderError('');
        }
        // Perform form submission logic here
        console.log("Form submitted successfully");
    };

    return (
        <div className="container">
            <form onSubmit={validateForm} id="form">
                <h1 id="p"><a href="/login">log in</a>  / Sign in</h1>
                <div className="input-control">
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname" name="first" type="text" />
                    <div className="error" id="firstname-error">{firstNameError}</div>
                </div>
                <div className="input-control">
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" name="last" type="text" />
                    <div className="error" id="lastname-error">{lastNameError}</div>
                </div>
                <div className="input-control">
                    <label htmlFor="dob">Date of Birth</label>
                    <input id="dob" name="birth" type="text" placeholder="dd-mm-yyyy" />
                    <div className="error" id="dob-error">{dobError}</div>
                </div>
                <div style={{ marginBottom: '13px' }}>
                    <label>Gender</label>
                    <br />
                    <input id="male" name="gender" type="radio" value="M" className="g" />
                    <label htmlFor="male">Male</label>
                    <input id="female" name="gender" type="radio" value="F" className="g" />
                    <label htmlFor="female">Female</label>
                    <input id="other" name="gender" type="radio" value="O" className="g" />
                    <label htmlFor="other">Prefer not to tell</label>
                    <div className="error" id="gender-error">{genderError}</div>
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    );
};

export default Signin;
