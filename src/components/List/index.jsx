import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    constructor(props) {
        super(props);

    }

    // static propTypes = {
    //     todos:PropTypes.Array.isRequired,
    //     updateTodo:PropTypes.function.isRequired
    // }

    render() {
        const { todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key = {todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}