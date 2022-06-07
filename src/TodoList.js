import React from "react";
import Todo from "./Todo";

export default function TodoList({todos=[], dispatch}){
    return(
        <div>
            {todos.map((t,i) => (
                <Todo {...t} dispatch={dispatch} index ={i}key={"todo-" + i} />
            ))}
        </div>
    );
}