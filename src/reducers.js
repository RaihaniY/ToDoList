function userReducer(state, action){
    switch (action.type){
        case "LOGIN":
        case "Register":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            return state;
    }
}


function todoReducer(state, action){
    switch(action.type){
        case "CREATE_TODO":
        const newTodo = {
            title: action.title,
            desc: action.desc,
            dateCreated: action.dateCreated,
            dateCompleted: action.dateCompleted,
            complete: action.complete
        };
        return [...state, newTodo];
        case "TOGGLE_TODO":
            let updatedTodo;
            if(action.complete){
                updatedTodo={
                    title: action.title,
                    desc: action.desc,
                    dateCreated: action.dateCreated,
                    dateCompleted: action.dateCompleted,
                    complete: action.complete.toString()         
                }
            }
            else{
                updatedTodo={
                    title: action.title,
                    desc: action.desc,
                    dateCreated: action.dateCreated,
                    dateCompleted: null,
                    complete: action.complete.toString()  
                }
            }
            const currState = state;
            currState[action.index] = updatedTodo;
            return currState;
            case 'DELETE_TODO':
                return state.filter((todo,index)=> index !== action.index)
            case 'FETCH_POSTS':
                return action.todos;
        default:
            return state
    }
}

export default function appReducer(state, action){
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}