import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo192.png'
import { CreateTodo, EditTodo, TodosList } from './components/index'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar-expand">
                        <a className="navbar-brand" href="localhost:3000">
                            <img src={logo} width="30" height="30" alt="MERN todo-app" />
                        </a>
                        <Link to="/" className="navbar-brand">Todo App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Todos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div >
                <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" component={EditTodo} />
                <Route path="/create" component={CreateTodo} />
            </Router >
        )
    }
}

export default App