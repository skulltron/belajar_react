import React from 'react'
import TodoListItems from './TodoListItems'
import axios from 'axios'

import './style.css'

//export cara cepat
export default class TodoList extends React.Component{
    //jangan taruh di luar class

    constructor(){
        super()
        this.state = {
            list_title: '',
            current_value: '',
            todos : []
        }
        this.deleteToDoByIndex = this.deleteToDoByIndex.bind(this);
    }

    deleteToDoByIndex(index){
        this.setState(prevState => (
                {
                    todos : [...prevState.todos.slice(0, index),
                    ...prevState.todos.slice(index + 1)]
                }
            ))
    }

    componentDidMount(){
        axios.get("")
    }

    render(){
        return(
            <div className="mario"><h2>Todo-List</h2>
            <label>Sub Judul</label>
            <br/><br/><input 
                        type="text" 
                        placeholder="Enter Title" 
                        value={this.state.list_title} 
                        onChange={(event)=>{this.setState({list_title: event.target.value})}}/>
                <ul>
                    {
                        this.state.todos.map((todo,index) => 
                        {
                            return(
                                // <div>
                                //     {todo.title} and {todo.completed.toString()}
                                // </div>
                                <TodoListItems 
                                key = {index}
                                index = {index}
                                deleteToDoByIndex = {this.deleteToDoByIndex}
                                title = {todo.title}
                                completed = {todo.completed}/>
                            )
                        })
                        
                    }
                </ul>
            <input
            type="text" 
            placeholder="Enter Item Name" 
            value={this.state.current_value}
            onChange={(event)=>{this.setState({current_value: event.target.value})}}/>

            <button
            onClick = {() => this.setState(prevState => ({
                todos : prevState.todos.concat({
                    title : this.state.current_value, 
                    completed: false
                }),
                current_value: ''
            })
            )
            }>
            Add Item To List</button><br/><br/>
            </div>
        )
    }
}

//export cara biasa
// export default TodoList

// event adalah apa yang sedang terjadi 