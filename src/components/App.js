import ReactDOM from 'react-dom';
import style from './style.module.css'
import React, { useState } from 'react';

function App() {

  const [inputValue, setValue] = useState("wewe");                                                                                                                                                                                                                                                       
  const [tasks, setTasks] = useState([
    {id: 1, name: 'Проснуца', isReady: false},
    {id: 2, name: 'Покушац', isReady: false},
    {id: 3, name: 'Покакац', isReady: false},
    {id: 4, name: 'Погулац', isReady: false},
    {id: 5, name: 'Спац', isReady: false}
  ]);


  const taskItems = tasks.map((task) =>
  <li className={style.list_item}>{task.name} {task.id}</li> 
  );

  return (
    <div className={style.Block}>
      <div className={style.but}>
        <input type="text" onChange= {(event)=> setValue(event.target.value)} value = {inputValue}/>
        <button onClick={() => setTasks([...tasks, {id: tasks.length+1, name: inputValue, isReady: false}])}>click</button>
      </div>
    <h1 className={style.title}>Task list</h1>
    <ul className={style.list}>{taskItems}</ul>
    </div>
    )
}

export default App;
