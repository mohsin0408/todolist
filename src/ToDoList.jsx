import React from 'react';
import { MdCancel } from "react-icons/md";


function ToDoList(props) {
    return (
    <div className='todo-style'>
        <MdCancel className="fa fa-times" aria-hidden="true" onClick={() => props.onSelect(props.id)} />
            <li>{props.text}</li>
        </div>
    );
}   

export default ToDoList;