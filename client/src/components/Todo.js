import React from 'react'
import { Link } from 'react-router-dom'

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.deleteById = this.deleteById.bind(this)
    }

    deleteById(id) {
        this.props.deleteById(id)
    }

    render() {
        return (
            <tr>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                <td>
                    <Link to={"/edit/" + this.props.todo._id}>Edit</Link>
                </td>
                <td className=''>
                    <button value={this.props.todo.todo_id} onClick={(e) => this.deleteById(e.target.value)}>
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

export default Todo