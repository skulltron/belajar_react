import React from 'react'
import TodoListItems from './TodoListItems'

import './style.css'

//export cara cepat
export default class TodoList extends React.Component{
    //jangan taruh di luar class
    state = {
        list_title:'',
        todos:[
            {
                title:'okeeh',
                completed:true
            },{
                title:'no god please no',
                completed:false
            }
        ]
    }

    render(){
        return(
            <div className="mario"><h2>Todo-List</h2>
            <label>Sub Judul</label>
            <br/><br/><input type="text" placeholder="Enter Title" value={this.state.list_title}/>
                <ul>
                    {
                        this.state.todos.map(todo => 
                        {
                            return(
                                <div>
                                    {todo.title} and {todo.completed.toString()}
                                </div>
                            )
                        })
                        
                    }
                </ul>
            <input type="text" placeholder="Enter Item Name"/>
            <button>Add Item To List</button><br/><br/>
            </div>
        )
    }
}

//export cara biasa
// export default TodoList