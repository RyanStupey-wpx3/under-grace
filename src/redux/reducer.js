import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";

const initialState = {
    user: null,
    event: null,
    postBool: false,
}

const LOG_IN = "LOG_IN";
const TRIGGER_EVENT = "TRIGGER_EVENT";
const CHANGE_BOOL = "CHANGE_BOOL"

export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN:
        return {...state, user: action.payload}
        case TRIGGER_EVENT: 
        return {...state, event: action.payload}
        case CHANGE_BOOL: 
        return {...state, postBool: action.payload}
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

export function changeBool(bool){
    console.log("hit changeBoolrs")
    return {
        type: CHANGE_BOOL,
        payload: bool
    }
 
}

export function rerenderTrigger(event){
    return {
        type: TRIGGER_EVENT,
        payload: event
    }
}