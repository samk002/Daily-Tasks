import React, { Component } from 'react'
import axios from 'axios'
import '../index.css'
import Todo from './Todo'
import CreateTodo from './create-todo.component';


class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        this.deleteCompleted = this.deleteCompleted.bind(this);
        this.deleteById = this.deleteById.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(newTodo) {
        var newArr = this.state.todos
        newArr.push(newTodo)
        this.setState(
            {
                todos: newArr
            }
        )
    }

    deleteCompleted() {
        const arr = this.state.todos.filter(function (currentTodo) {
            if (!currentTodo.todo_completed) {
                return currentTodo
            }
        })
        this.setState({
            todos: [...arr]
        })

        axios.delete('/todos/delete')
            .then(() => console.log("Data deleted"))
            .catch(err => console.log(err))
    }

    deleteById = (id) => {
        const arr = this.state.todos.filter(function (currentTodo) {
            if (currentTodo.todo_id !== id) {
                return currentTodo
            }
        })
        this.setState({
            todos: [...arr]
        })

        axios.delete('todos/delete/' + id)
            .then(() => console.log("Deleted todo:" + id))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get(`/todos`)
            .then(response => {
                this.setState({ todos: response.data })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} deleteById={this.deleteById} key={i} />
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ margin: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
                <div>
                    <button className="delete-complete" onClick={this.deleteCompleted}>
                        Delete completed tasks
                </button>
                </div>
                <CreateTodo addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodosList