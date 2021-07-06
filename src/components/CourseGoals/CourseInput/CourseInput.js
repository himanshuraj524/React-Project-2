import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // state for validating a form input box.
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    // if the value is greater than 0 the setIsValid function will set the value of isValid to true.
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // on the time of form submission if the input box is empty the setIsValid function will set the value of isValid to false.
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* below we are using the ternary operator to set the colors of the label and input box based on the condition. */}
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{ borderColor: !isValid ? 'red' : 'black' }} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
