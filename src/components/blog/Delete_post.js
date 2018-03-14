import React from 'react';

 const Delete_button = (props) => {
    return(<button onClick={() => props.delete_post(props.index)}>delete</button>)
}
export default Delete_button;