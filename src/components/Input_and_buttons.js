import React, { Component } from 'react';
// import Edit from './Edit_button';
// import Delete from './Delete_button';
import {DeleteButton, EditButton, SendButton} from './Buttons';
import axios from 'axios';
import '../styles/input_and_button.css'

class InputField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prodName: "",
            prodPrice: '',
            prodVal: [],
            prodId: '',
        }
        // this.deleteDbInput = this.deleteDbInput.bind(this);
        // this.editDbInput = this.editDbInput.bind(this);
        this.setNameState = this.setNameState.bind(this);
        this.setPriceState = this.setPriceState.bind(this);
        this.sendDbInput = this.sendDbInput.bind(this);
    
    }
setNameState(val){
    this.setState({
        prodName: val
    })
}

setPriceState(val){
    this.setState({
        prodPrice: val
    })
}

sendDbInput(){
    
    
    axios.post('http://localhost:3535/api/shelves/bins', {prod_name: this.state.prodName, prod_price: this.state.prodPrice})
    .then((resp) => {
        let alpha = resp.data[0]
       
       axios.get('http://localhost:3535/api/shelves/bins')
       .then((resp) => {
           this.setState({
                prodId: alpha.id
           })
       })
    })
    .catch((err) => {
        console.log('err', err)
    })
}

deleteDbInput(id){
    axios.delete(`http://localhost:3535/api/shelves/bins/${id}`)
    .then((resp) => {
        this.setState({
            prodName: '',
            prodPrice: ''
        })
        // console.log(this.state.prodId)
        console.log('success')
    })
    .catch((err) => {
        console.log('err', err)
    })
}

  render() {
      console.log(this.state.prodId.id)
    return (

      <div className="inputField">
      <header></header>
            <input className="input-field" type="text" onChange={(e) => this.setNameState(e.target.value)} placeholder="Name"/>
            <input className="input-field" type="text" onChange={(e) => this.setPriceState(e.target.value)} placeholder="Price"/>
            <EditButton editDbInput={this.editDbInput} /*index={index}*//> 
            <DeleteButton deleteDbInput={this.deleteDbInput} prodId={this.state.prodId} /*index={index}*//>
            <SendButton sendDbInput={this.sendDbInput}/>
            {this.state.prodId}
      </div>
    );
  }
}

export default InputField;
