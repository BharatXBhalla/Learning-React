const initalState = false;
function isLoggedReducer (state = initalState,action){
    switch(action.type){
        case 'SIGIN':
            return true;
        default:
            return state;
    }
}

export default isLoggedReducer;