// we are going to use css module here.
import style from './Button.module.css'

// Here we are using the styled components
// import styled from 'styled-components';

// Below we have created a button component which is the same button component which we have created previously but this time it has been created by styled component and it will contain all the props values and all the eventlistener
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }
// // here we areadding media queries.
// @media (min-width: 768px){
//   width: auto;
// }
// `;

const Button = props => {
  return (
    // below we have used css module for styling the button, using css module helps us to give the css style's unique names.
    <button type={props.type} className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
