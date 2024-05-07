import React from "react";
import {useAppDispatch} from "../hooks";
import {filterTodo, searchTodo} from "../feature/todoSlice";

const Search = () => {
    const dispatch=useAppDispatch()

    return (
        <div className={'flex space-x-4'}>
            <input
                className="rounded w-3/4 text-2xl pl-1 "
                type="text"
                placeholder={'Search'}
                onChange={(event)=> dispatch(searchTodo(event.currentTarget.value))}
            />
            <select className="rounded text-xl pl-1 " onChange={(event)=> dispatch(filterTodo(event.target.value ))}>
                <option value="all">All</option>
                <option value={1}>Completed</option>
                <option value={0}>Uncompleted</option>
            </select>
        </div>
    );
};

export default Search;
