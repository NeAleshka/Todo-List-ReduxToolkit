import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface TodosState {
    id: string;
    text: string;
    complete: boolean;
}

const initialState: TodosState[] = JSON.parse(localStorage.getItem('todos') || '[]') ;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //Добавление задачи
        addTodo: (state, action: PayloadAction<TodosState>) => {
            const todos = action.payload;
            state.push(todos);
            localStorage.setItem('todos',JSON.stringify(state))
        },
        //Удаление задачи
        deleteTodo: (state, action: PayloadAction<string>) => {
            const newState=state.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos',JSON.stringify(newState) )
            return newState
        },
        //Сменить статус задачи
        toggle: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const newState=state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
            localStorage.setItem('todos',JSON.stringify(newState) )
            return newState
        },
        //Поиск по имени задачи
        searchTodo: (state, action: PayloadAction<string>) => {
            if(!action.payload) return initialState
            return state.filter(todo=>todo.text.includes(action.payload))
        },
        //Фильтрация задач по статусу
        filterTodo: (_, action: PayloadAction<number|string>) => {
            if(Number.isNaN(+action.payload)){
                return  initialState
            }
            return  initialState.filter(todo=>todo.complete === Boolean(+action.payload))
        }
    },
});

export const { addTodo, deleteTodo, toggle,searchTodo ,filterTodo} = todosSlice.actions;

export default todosSlice.reducer;
