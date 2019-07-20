import React from 'react'
import TodoListItems from './TodoListItems'

import './style.css'

//export cara cepat
export default class TodoList extends React.Component{
    render(){
        return(
            <div className="mario">Todo-List
                <ul>
                    <TodoListItems/>
                    <TodoListItems/>
                    <TodoListItems/>
                </ul>
            </div>
        )
    }
}

//export cara biasa
// export default TodoList