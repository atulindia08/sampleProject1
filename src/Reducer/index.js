
const state = {
    A:1,
    B:1,
   
}

const reducer = (initialState = state, action)=>{
    const newState = {...initialState};
    if(action.type == 'MAKE_A'){
        newState.A = newState.A + newState.B;
    }
    if(action.type == 'MAKE_B'){
        newState.B = newState.A + newState.B;
    }

    return newState;
}

export default reducer;