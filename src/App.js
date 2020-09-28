import React, { useEffect,useState } from 'react';
//styled-components is used on Character.js not here
import axios from 'axios';
import './App.css';

//import local components
import Character from './components/Character';
import Breathe from './components/Breathe';



const App = () => {

  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  //console.log(data);
  const fetchData = () =>{
    axios.get('https://swapi.dev/api/people/')
      .then(
        (response)=>{
          console.log(response.data.results);
          setData(response.data.results);
//console.log(data);
        }
      )
  }
  

useEffect(fetchData, []);
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((element)=>{
           return <Character key={element.created} name={element.name} />
         })} 
      {console.log(data[0])}
      
      <Breathe />
    </div>
  );
}

export default App;
