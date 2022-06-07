import React, {useState} from "react";
import {useResource} from 'react-request-hook'

export default function CreateTodo ({dispatch}){
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    function handleTitle(evt) {setTitle(evt.target.value)}
    function handleDesc(evt) {setDesc(evt.target.value)}
    const [todo, createTodo] = useResource(({title, desc, dateCreated, complete, dateCompleted}) => ({
        url: '/todos',
        method: 'post',
        data: {title, desc, dateCreated, complete, dateCompleted}
    }))
    function handleCreate(evt){
        let creation = Date(Date.now())
        createTodo({title, desc, dateCreated:creation, dateCompleted:null, complete:false})
        dispatch({type: "CREATE_TODO", title, desc, dateCreated: Date(Date.now()), dateCompleted:null, comlpete:false})
    }

    return(
        <>
        <h2> Create a todo </h2>
        <form onSubmit={(e) => {e.preventDefault(); handleCreate(e)}}>
            <div>
                <label htmlFor="create-title"> Title: </label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <label> Description of the todo: </label>
            <textarea value={desc} onChange={handleDesc} />
            <input type="submit" value="Create" disabled={title.length === 0} />
        </form>
        </>
    );
}