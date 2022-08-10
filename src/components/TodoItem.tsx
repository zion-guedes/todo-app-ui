import React from "react";
import { Todo } from "../entities/Todo";
import './TodoItem.scss'

export const TodoItem = ({ title, description, isCompleted} : { title: string, description: string, isCompleted: boolean}) => {
    return(
        <article className="todo-item">
            <section className="todo-item-text">
                <h3>{title}</h3>
                <p>{description}</p>
                <input type="checkbox" defaultChecked={isCompleted}></input>
            </section>
        </article>
        )
    }