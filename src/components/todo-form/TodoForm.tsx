import React, {useState} from 'react';
import './todo-form.css';
import {useInput} from "../../hooks/useInput";

interface IProps {
    addTodoCb: Function;
}

function TodoForm(props: IProps) {

    const {value, onChange, resetValue} = useInput('');

    const onAddTodo = () => {
        props.addTodoCb(value);
        resetValue();
    };

    return (
        <div className="todo-form">
            <input type="text"
                   className="form-control"
                   autoComplete="off"
                   value={value}
                   onChange={onChange}
                   placeholder="Add todo"/>
            <button className="btn btn-primary font-weight-bold ml-2" onClick={onAddTodo}>Add</button>
        </div>
    );
}

export default TodoForm;
