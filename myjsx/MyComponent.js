import React, {Component} from 'react';
import {View, Text} from 'react-native';
// class MyComponent extends Component {

//     constructor(){
//         super();
//         console.log('constructor');
//     }

//     componentDidMount=()=>{
//         console.log('componentDidMount');
//     }

//     render(){
//         console.log('render');
//         return(
//             <View><Text>{this.props.name}</Text></View>
//         )
//     }
// }

const MyComponent=(props)=>{
    return (
        <View>
            <Text>function based def.name={props.name}</Text>
            <Text>function based def.name={props.children}</Text>
        </View>
    )
}

export default MyComponent;

