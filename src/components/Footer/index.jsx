import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    handleCheck = (event) => {
        const ischecked = event.target.checked;
        this.props.updateCheck(ischecked);
    }

    clearTodo = () => {
        if(window.confirm("确定清除所有已完成事件？")) {
            this.props.clearTodo();
        }
    }

    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0)},0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheck} checked={doneCount === todos.length ? true:false}/>
                </label>
                <span>
					<span>已完成{doneCount}</span>/{todos.length}全部
				</span>
                <button className="btn btn-danger" onClick={this.clearTodo}>清除已完成任务</button>
            </div>
        )
    }
}
