import React, { useEffect, createContext, useReducer } from "react";
import {useResource} from 'react-request-hook'
import UserBar from './UserBar'
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import Header from "./Header";
import StateContext from "./Context";
import appReducer from "./reducers";

function App() {
  //const [user, setUser] = useState("");
  //const todos = [{title: 'First todo', desc: 'Take out the trash', creation: '4/25'}]
  //const [todos, setTodos] = useState([])
  const [state, dispatch] = useReducer(appReducer, {user:'', todos: [] })
  
  const [posts, getPosts] = useResource(()=> ({
    url: '/todos',
    method: 'get'
  }))
  
  useEffect(getPosts, [])
  useEffect(()=>{
    if (posts && posts.data){
      dispatch({type:'FETCH_POSTS', todos: posts.data})
    }
  }, [posts])

  useEffect(()=> {

    if (state.user){
      document.title = `${state.user}'s Todos`
    } else {
      document.title = 'My Todos'
    }
  }, [state.user]
  )


  // useEffect(() => {
  //   console.log('post effect hook firing')
  //  }, [state.todos]
  // )


  return (
    <div>
      <ThemeContext.Provider value = {{primary: 'red'}}>
        <Header text = "My Blog"/>
      </ThemeContext.Provider>
      <UserBar user={state.user}  dispatch={dispatch} />
      {state.user && <CreateTodo dispatch={dispatch} />}
      {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
    </div>
  );
}
export const ThemeContext = createContext({primary:'blue'});
export default App;
