import React from 'react'

const TodoListItems = (props) =>{
    console.log(props)
    return(
        <li>
            <input type="checkbox" checked={props.completed}/>
            <span>{props.title}</span>
            <button 
            onClick={
                () => props.deleteToDoByIndex(props.index)
            }>Delete List</button>
        </li>
    )
}

export default TodoListItems