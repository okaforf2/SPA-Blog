// import React, { Component } from 'react';
// import {  CommentOutlined } from '@ant-design/icons'
// // import Icon from '@ant-design/icons'


//  class OktobIcon2 extends Component {

//  theme = "outlined";

//  constructor(props){

//  super(props);

//  this.state = {
//  selected: props.selected
//  }

//  this.onClick = this.onClick.bind(this);
//  }


//  onClick(){
//  //reverse the selected state with every click
//  this.setState({selected: !this.state.selected});
//  }

//  render(){

//     let theme;
//      if(this.state.selected){
//      theme = 'filled';
//      }
//     else{
//      theme = 'outlined';
//     }

//  //return a span that contains the desired icon
//  //and a space then the counter
//  //if the icon is clicked we will run onClick handler

//  return <span> 
//     <CommentOutlined type={this.props.type} onClick={this.onClick} theme={ theme } style={{color:'steelblue'}}/> {this.props.count}
//  </span>
 
//  }

//  }

//  export default OktobIcon2;