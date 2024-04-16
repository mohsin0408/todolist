import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [items,setItems] = useState([]);
  const [inputList,setInputList] = useState('');

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  function deleteItems(id) {
    console.log('deleted')
    setItems((oldItems)=>{return oldItems.filter((arrElem, index)=> {
      return index !== id;
    })
  })
  };
  function listofItems(){  
    setItems([...items,inputList]);
    setInputList('');
  };

  function HandleKeyDown (event){
    if(event.key=== 'Enter'){
      listofItems();
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div" >
          <h1>ToDoList</h1>
          <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} onKeyDown={HandleKeyDown} />
          <button onClick={listofItems}> + </button>
          <ol>
          {items.map ((itemval,index) => {
            return (<ToDoList id={index} key={index} text={itemval} onSelect={deleteItems} />)
          })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
