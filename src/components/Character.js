// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const Character = (props) => {

const H2 = styled.h2`
  color: white;
  background-color: black;
  font-size: 1.5rem;
  margin: .2em;
  padding: 0.25em .25em;
  border: .1rem solid white;
  border-radius: 3px;
`;

  return (
    <div className="App">
      <H2>{props.name}</H2> 
    </div>
  );
}

export default Character;