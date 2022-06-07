import React from "react";

export default function Todo({ title, desc, dateCreated,dateCompleted,complete, index, dispatch,deleted}) {
  function handleChecked(evt) {
      dispatch({type:'TOGGLE_TODO', title, desc, dateCreated, dateCompleted: Date(Date.now()), complete: evt.target.checked, index});
  }
  function handleDelete(){
    dispatch({type: 'DELETE_TODO', index})
    post
  }


  return (
      <div>
          <h1>{title}</h1>
          <p>{desc}</p>
          <label htmlFor="complete-checkbox">Complete Task:</label>
          <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleChecked}/><br></br>
          <div>Complete: {complete}</div>
          <div>Date Created: {dateCreated}</div>
          <div>Date Completed: {dateCompleted}</div>
          <input type="button" value="delete" onClick={handleDelete}></input>
          <div></div>
      </div>
  )
}