import React from "react"
import { Todo } from "../entities/Todo"
import { TodoItem } from "./TodoItem"
import './TodoList.scss'

type Props = {
    todos: Todo[]
}

export const TodoList = ({ todos } : { todos: any}) => {
    return(
        <ul className="todo-list">
            {
                todos.map((todo: any, i: number) => (
                    <li key={i}><TodoItem
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted} />
                    </li>
                ))
            }
        </ul>
        )
    }