import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// importing css module file.
import style from './CourseInput.module.css';
// import styled component.
// import styled from 'styled-components';

// creating one more component by using styled component.
// const FormControl = styled.div`

//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   // below we are using props to set the styling dynamically.
//   color: ${ props => (props.invalid ? 'red' : 'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   // below we are using props to set the styling dynamically.
//   border: 1px solid ${ props => (props.invalid ? 'red' : '#ccc' )};
//   background: ${ props => (props.invalid ? 'rgb(253, 208, 208)' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

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
      {/* below we are using the ternary operator to set the classes of the label and input box based on the condition. */}
      {/* This is the first way to ad classes dynamically */}
      {/* <FormControl className={!isValid && 'invalid'}> */}
      {/* below we are using props to add the style into the formcontrol component dynamically. */}
      <div invalid={!isValid} className={`${style['form-control']} ${!isValid && style.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
