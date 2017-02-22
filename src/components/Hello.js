import React from "react";
import {Router, Route, hashHistory} from 'react-router';
import {Register} from './RegisterComponent';

// import { Todo } from '../../actions/todoActions'; import { todoStore } from
// "../../stores/todoStore"; import { todoItem, TodoItem } from
// '../components/TodoItem'; export interface HelloProps {     compiler: string;
//     framework: string; } export interface State {
//     todos: todoItem[]; }

export class Hello extends
React.Component {
    constructor() {
        super();
        // this.state = { todos: todoStore.getAll() };

    }

    /*componentWillMount() {
        todoStore.on("change", () => {
            this.setState({
                todos: todoStore.getAll(),
            });
        });
    }

    addContact(event) {
        event.preventDefault();
        console.log(this);
    }
    getTodoes(event) {
        event.preventDefault();
        var todo = new Todo();
        let list = todo.reloadTodos();
    }

    render() {
        let todos = this.state.todos;
        let TodoComponenets = todos.map((todo) => {
            return <TodoItem {...todo} key={todo.id} />;
        });
        return <div>
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
            <form onSubmit={this
                .addContact
                .bind(this)}>
                <input type="text" ref="name" />
                <input type="password" ref="password" />
                <button type="submit">Add New Contact</button>
            </form>
            <button onClick={this.getTodoes.bind(this)}>
                get todoes
            </button>
            <div>
                {TodoComponenets}
            </div>

        </div>
    }*/
    render(){
        return <div> Hello asda asdasdsa wae dsadsa ads</div>;
    }
}
export default Hello;