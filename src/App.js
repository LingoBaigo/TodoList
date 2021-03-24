import './App.css';
import React,{ Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component{
    //状态在哪里更新状态的方法就在哪里
    constructor(props) {
        super(props);
        this.state = {todos:[
                {id:'001',name:'吃饭',done:true},
                {id:'002',name:'睡觉',done:true},
                {id:'003',name:'打代码',done:false},
                {id: '004',name:'逛街',done:true}
            ]}
    }

    //addTodo用于添加一个todo 参数是一个对象
    addTodo = ( todoObj ) => {
        //获取todos
        const { todos } = this.state;
        //追加todos
        const newTodos = [todoObj,...todos];
        //更新状态
        this.setState({todos:newTodos})
    }

    //更新todo的状态
    updateTodo = (id,done) => {
        //获取todos
        const { todos } = this.state;
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id){
                return {...todoObj,done:done}
            } else {
                return todoObj;
            }
        })
        //更新状态
        this.setState({todos:newTodos})
    }

    //删除todo
    deleteTodo = (id) => {
        //获取todo
        const {todos} = this.state;
        //删选数据
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        //更新状态
        this.setState({todos:newTodos})
    }

    //全选
    updateCheck = (flag) => {
        //获取todos
        const {todos} = this.state;
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:flag}
        })
        //更新状态
        this.setState({todos:newTodos});
    }

    //清除已完成事件
    clearTodo = () => {
        //获取todos
        const {todos} = this.state;
        //加工数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        //更新数据
        this.setState({todos:newTodos})
    }

    render() {
        const { todos } = this.state
        return (
            <div className="App">
                <Header addTodo = {this.addTodo}/>
                <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
                <Footer todos = {todos} updateCheck = {this.updateCheck} clearTodo = {this.clearTodo}/>
            </div>
        );
    }
}
