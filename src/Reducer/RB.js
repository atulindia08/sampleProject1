
const state = {
    B:1,
   
}

const reducerB = (initialState = state, action)=>{
    const newState = {...initialState};
    if(action.type == 'MAKE_B'){
        newState.B = newState.B + action.val;
    }

    return newState;
}

export default reducerB;