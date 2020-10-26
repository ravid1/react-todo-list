import React, {useEffect, useState} from 'react';
import './master-details.css';
import {ITodoItem} from "../../App";
import {useParams} from "react-router";

interface IProps {
    list: ITodoItem[];
    onEditDescription: Function;
}

export const MasterDetails = ({list, onEditDescription}: IProps) => {

    const {id} = useParams<any>();
    const [selectedTodo, setSelectedTodo] = useState<ITodoItem | null>(null);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        console.log('id', id);
        const todo = list.find(todoItem => todoItem.id === +id);
        setSelectedTodo(todo || null)
    }, [id]);

    const getDetails = () => {
        return (
            <>
                <h3>Todo Title:</h3>
                <h5>{selectedTodo?.title}</h5>
                <h3 className="mt-5">Todo description: <span className="pointer"
                                                             onClick={() => setEditMode(!editMode)}>&#9998;</span></h3>
                {
                    !editMode ? <h5>{selectedTodo?.description}</h5> :
                                <textarea defaultValue={selectedTodo?.description}
                                          onChange={ (e) => onEditDescription(selectedTodo?.id, e.target.value)}/>
                }
            </>
        )
    };

    return (
        <div className="master-detail">
            {selectedTodo ? getDetails() : ''}
        </div>
    );
};
