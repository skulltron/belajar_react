import React from 'react'
import TodoListItems from './TodoListItems'

//export cara cepat
export default class TodoList extends React.Component{
    render(){
        return(
            <div>Todo-List
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