import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "First TODO",
            completed: false,
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id) => { },
    completeTodo: (id) => { },
    deleteTodo: (id) => { },
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

/*
*   This is used as 
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => { IMPLETEMENT }
    
    <TodoProvider values={{todos, addTodo, updateTodo, completeTodo, deleteTodo}} >
        // add components here.
    </TodoProvider>
*/