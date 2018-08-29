const initialState = {
    user: null,
    event: null,
    post: null,
}

const LOG_IN = "LOG_IN";
const TRIGGER_EVENT = "TRIGGER_EVENT";
const POST_STATE = "POST_STATE"

export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN:
        return {...state, user: action.payload}
        case TRIGGER_EVENT: 
        return {...state, event: action.payload}
        case POST_STATE: 
        return {...state, post: action.payload}
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

export function postState(state){
    return {
        type: POST_STATE,
        payload: state
    }
}

export function rerenderTrigger(event){
    return {
        type: TRIGGER_EVENT,
        payload: event
    }
}