import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    constructor(props) {
        super(props);
    }


    handleKeyUp = (event) => {
        //判断按下的是不是回车键 keycode 13 回车
        const { keyCode,target } = event
        if(keyCode !== 13){
            return
        } else if( target.value.trim() === "") {
            alert("输入不能为空")
        } else if (keyCode === 13){
            const todoObj = {id:nanoid(),name:target.value,done:false}
            this.props.addTodo(todoObj)
            //清空输入
            target.value = "";
        }

    }

    render() {
        return (
            <div className="todo-header">
                <h2>小白&小黄的TodoList</h2>
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}