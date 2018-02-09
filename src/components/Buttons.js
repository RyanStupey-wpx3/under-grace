import React, {Component} from 'react';


export const EditButton = (props) => {
return(<button /*{onClick={props.editDbInput(props.index)}}*/>Edit</button>)
}

export const DeleteButton = (props) => {
    return(<button onClick={() => props.deleteDbInput(props.prodId)}>Delete</button>)
}

export const SendButton = (props) => {
    return(<button onClick={props.sendDbInput}>Send</button>)
}