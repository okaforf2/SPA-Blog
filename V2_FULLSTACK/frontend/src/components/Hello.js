import React from 'react';
// import { OmitProps } from 'antd/lib/transfer/renderListBody';

//function now expects an object called props
function Hello(props) {
//we expect props to have a property called name
//  const greeting = 'Hello ' + props.name 
const greeting = props.name? 'Hello ' + props.name : "Hello World"
return <h1>{greeting}</h1>;
 }
export default Hello;