import React from 'react';
import './App.css';
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/todo-list";
import {useTodoListState} from "./hooks/useTodoListState";
import {MasterDetails} from "./components/master-details/MasterDetails";
import {BrowserRouter as Router, Route} from 'react-router-dom';


export interface ITodoItem {
    title: string,
    description: string,
    completed: boolean,
    id: number
}

function App() {

    const {list, editDescription, addTodo, toggleComplete, deleteTodo} = useTodoListState([]);

    return (
        <Router>
            <div className="App">

                <div className="todos-container">
                    <TodoForm addTodoCb={addTodo}/>
                    <TodoList list={list}
                              onToggleTodo={toggleComplete}
                              onDeleteTodo={deleteTodo}/>
                </div>

                <div className="master-details-container">
                    <Route path="/details/:id">
                        <MasterDetails onEditDescription={editDescription} list={list}/>
                    </Route>
                </div>

            </div>
        </Router>
    );
}

export default App;
