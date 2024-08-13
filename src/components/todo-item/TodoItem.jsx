import './TodoItem.css';

export default function TodoItem( { tarea }  ) {
  return (
    <li className="todo-item">
        
        {tarea.text}

    </li>
  )
}
