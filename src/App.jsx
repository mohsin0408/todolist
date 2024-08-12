import React, { useState } from "react";
import ToDoList from "./ToDoList";
import './index.css'; 

const App = () => {
  const [items, setItems] = useState([]);
  const [inputList, setInputList] = useState('');

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const deleteItems = (id) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  const listofItems = () => {
    if (inputList.trim() !== "") { 
      setItems([...items, inputList]);
      setInputList('');
    }
  };

  const HandleKeyDown = (event) => {
    if (event.key === 'Enter') {
      listofItems();
    }
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <h1>ToDoList</h1>
        <input 
          type="text" 
          placeholder="Add Items" 
          value={inputList} 
          onChange={itemEvent} 
          onKeyDown={HandleKeyDown} 
        />
        <button onClick={listofItems}> + </button>
        <ol>
          {items.map((itemval, index) => (
            <ToDoList id={index} key={index} text={itemval} onSelect={deleteItems} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
