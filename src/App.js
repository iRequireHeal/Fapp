import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const tasks = [
    {id: 1, name: 'Проснуца', isReady: false},
    {id: 2, name: 'Покушац', isReady: false},
    {id: 3, name: 'Покакац', isReady: false},
    {id: 4, name: 'Погулац', isReady: false},
    {id: 5, name: 'Спац', isReady: false}
  ]
  const taskItems = tasks.map((task) =>
  <li>{task.name}</li> 
  );

  return (
    <ul>{taskItems}</ul>
    )
}

export default App;
