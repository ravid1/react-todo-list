import React from 'react';
import './todo-list.css';
import {ITodoItem} from "../../App";
import {Link} from "react-router-dom";

interface IProps {
    list: ITodoItem[];
    onToggleTodo: Function;
    onDeleteTodo: Function;
}

function TodoList({list, onDeleteTodo, onToggleTodo}: IProps) {

    return (
        <div className="todo-list">
            {list.map((todo) => {
                const id = todo.id;
                return (
                    <div className="todo-item" key={id}>
                        <input type="checkbox"
                               onChange={() => onToggleTodo(id)}
                               checked={todo.completed}/>
                        <div className="details">
                            <Link to={'/details/' + id}>
                                <div className={todo.completed ? 'completed' : ''}>{todo.title}</div>
                            </Link>
                            <div className="description">{todo.description}</div>
                        </div>
                        <span className="close" onClick={() => onDeleteTodo(id)}>&#x1F5D1;</span>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoList;
