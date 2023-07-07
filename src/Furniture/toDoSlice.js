export const toDoreducer = (state='', action) =>{
    if(action.type === 'add'){
        return{
            ...state,
            todo:[...state.todo, action.payload]
        }
    }
    if(action.type === 'edit'){       
            state.todo.find((val)=> val.id === action.payload.id).element = action.payload.element
    }
    if(action.type === 'delete'){
        state.todo.find((val) => val.id === action.payload.id).deleted = false
    }
    if(action.type === 'restore'){
        state.todo.find((val) => val.id === action.payload.id).deleted = true
    }
    return state
}


