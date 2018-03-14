import React from 'react';

 const Edit_button = (props) => {
    return(<button onClick={() => props.edit_post(props.index)}>edit</button>)
}
export default Edit_button;