import React, { FormEvent } from 'react';

type Props = {
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todo: string;
    submit: (e: FormEvent<HTMLFormElement>) => void;
};

const FormInput = ({ setTodo, todo, submit }: Props) => {
    return (
        <form className="flex items-center justify-between" onSubmit={submit}>
            <input
                className="rounded w-full text-2xl mb-1 pl-1"
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button
                className="p-1 ml-1 rounded hover:text-white bg-green-400 "
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

export default FormInput;
