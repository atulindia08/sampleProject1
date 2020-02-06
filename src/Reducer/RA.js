
const state = {
    A:1,
   
}

const reducerA = (initialState = state, action)=>{
    const newState = {...initialState};
    if(action.type == 'MAKE_A'){
        newState.A = newState.A + action.val;
    }

    return newState;
}

export default reducerA;