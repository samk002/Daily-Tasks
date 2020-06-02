import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../index.css'

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.deleteCompleted = this.deleteCompleted.bind(this);
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

    deleteById(id) {
        const arr = this.state.todo.filter(function (currentTodo) {
            if (currentTodo._id !== id) {
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
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />
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
            </div>
        )
    }
}

export default TodosList