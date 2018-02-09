import React, {Component} from 'react';


export const Edit_button = (props) => {
    return(<button onClick={props.editDbInput(props.index)}>Edit</button>)
}

export const Delete_button = (props) => {
    return(<button onClick={props.deleteDbInput(props.index)}>Delete</button>)
}