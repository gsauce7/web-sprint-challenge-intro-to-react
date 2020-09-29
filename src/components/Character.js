// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const Character = (props) => {


const H2 = styled.h2`
  color: black;
  background-color: lightgrey;
  opacity: 0.5;
  font-size: 1.5rem;
  text-shadow: -.2rem 0 white, 0 .2rem white, .2rem 0 white, 0 .2rem white;
  margin: .2em;
  letter-spacing: .5em;
  padding: 0.5em .5em;
  border: .1rem solid white;
  border-radius: 3px;
`;


/*
const H2 = styled.h2`
display: flex;
flex-wrap: wrap;
width: 30%;
justify-content: space-evenly;
margin-top: 30px;
align-items: center;
padding: 20px;
background-color: gold;
color: black;
margin: 5%;
border-radius: 6px;
`;
*/

  return (
    <div className="App">
      <H2>{props.name}</H2> 
      <H2>{props.height}</H2>
    </div>
    
  );
}

export default Character;