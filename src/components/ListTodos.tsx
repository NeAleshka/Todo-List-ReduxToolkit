import React, { FormEvent, useState } from 'react';
import { TodosState } from '../feature/todoSlice';
import { AiFillDelete } from 'react-icons/ai';
import { useAppDispatch } from '../hooks';
import { deleteTodo, toggle } from '../feature/todoSlice';

type Props = {
    todos: TodosState[];
};

const ListTodos = ({ todos }: Props) => {
    const dispatch = useAppDispatch();
    const toggleComplete = (id: string) => {
        dispatch(toggle(id));
    };
    return (
        <div>
            {todos.map(todo => (
                <div
                    key={todo.id}
                    className="p-4 flex items-center justify-between hover:bg-slate-500 rounded  "
                >
                    {todo.complete ? (
                        <li className="text-xl list-none line-through">
                            {todo.text}
                        </li>
                    ) : (
                        <li className="text-xl list-none">{todo.text}</li>
                    )}
                    <form className="text-2xl flex items-center ">
                        <input
                            type="checkbox"
                            onChange={() => toggleComplete(todo.id)}
                            checked={todo.complete}
                        />
                        <button
                            className="ml-2"
                            onClick={e => {
                                e.preventDefault();
                                dispatch(deleteTodo(todo.id));
                            }}
                        >
                            <AiFillDelete />
                        </button>
                    </form>
                </div>
            ))}
        </div>
    );
};

export default ListTodos;
