import {useState} from 'react';
import {ITodoItem} from "../App";

let todoId = 0;

export function useTodoListState(initialValue: any) {

    const [list, setList] = useState<ITodoItem[]>(initialValue);

    const addTodo = (text: string) => {
        if (text) {
            const newTodoItem = {
                title: text,
                description: '',
                completed: false,
                id: todoId++
            };
            setList([...list, newTodoItem]);
        }
    };

    const toggleComplete = (id: number) => {
        const newList = list.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        );

        setList(newList);
    };

    const deleteTodo = (id: number) => {
        const newList = list.filter(todo => todo.id !== id);
        setList(newList);
    };

    const editDescription = (id: number, description: string) => {
        const newList = list.map(todo =>
            todo.id === id ? {...todo, description} : todo
        );
        setList(newList);
    };

    return {
        list,
        addTodo,
        toggleComplete,
        deleteTodo,
        editDescription
    }
}
