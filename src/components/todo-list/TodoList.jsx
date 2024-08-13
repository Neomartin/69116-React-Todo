import TodoItem from "../todo-item/TodoItem"



export default function TodoList({ todos }) {

    return   <ul className="todo-list">
            {
                todos.map((todo) => {

                    return <TodoItem key={todo.id} tarea={todo} />

                    // return <li key={todo.id}>
                    //     { todo.text }
                    // </li>

                })

            }
        </ul>

}
