import React, { useState } from 'react';

function StudentForm() {
  const [userInput, setUserInput] = useState({});

  function handleChange({target}) {
    const { name, value } = target;
    setUserInput(prev => ({
      ...prev,
      [name]: value;
    }))
  }

  return (
    <div>
      <form>
        <label for="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" onChange={handleChange} value={userInput.firstName}/>
        <br/>
        <label for="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text"/>
        <br/>
        <label for="age">Age</label>
        <input id="age" name="age" type="number"/>
        <br/>
        <label for="address">Address</label>
        <input id="address" name="address" type="text"/>
        <br/>
        <label for="homeroom-class-number">Homeroom class number</label>
        <input id="homeroom-class-number" name="homeroom-class-number" type="number"/>
        <br/>
        <label for="studentId">Student ID</label>
        <input id="studentId" name="studentId" type="number"/>
        <br/>
        <p>Lunch Options</p>
        <input id="lunch-taco" name="lunch-options" type="radio"/>
        <label for="lunch-taco">Taco</label>
        <br/>
        <input id="lunch-burrito" name="lunch-options" type="radio"/>
        <label for="lunch-burrito">Burrito</label>
        <br/>
        <input id="lunch-pizza" name="lunch-options" type="radio"/>
        <label for="lunch-pizza">Pizza</label>
      </form>
      <div>
        <h3>Input Results</h3>
        <p>First Name {userInput.firstName}</p>
        <p>1</p>
      </div>
    </div>
  )
}

export default StudentForm;