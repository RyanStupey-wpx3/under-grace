const initialState = {
    user: null
}

const LOG_IN = "LOG_IN";

export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN:
        return {...state, user: action.payload}
        default: 
            return state;
    }
}

export function log_in(user){
    return {
        type: LOG_IN,
        payload: user
    }

}