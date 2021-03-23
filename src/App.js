import './App.css';
import React,{ Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component{

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

    render() {
        const { todos } = this.state
        return (
            <div className="App">
                <Header addTodo = {this.addTodo}/>
                <List todos = {todos}/>
                <Footer />
            </div>
        );
    }
}
