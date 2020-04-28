import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
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

// const MyStateComponent=(props)=>{
//     return (
//         <View>
//             <Text>function based def.name={props.name}</Text>
//             <Text>function based def.name={props.children}</Text>
//         </View>
//     )
// }

// class MyStateComponent extends Component {
//     constructor(){
//         super();
//         this.state= {count:0};
//     }
//     set=()=>{
//         // console.log('set');

//         this.setState({count:this.state.count+1});
//     }
//     render() {
//         return (
//             <View>
//                 <Text onPress={this.set}>Hello</Text>
//                 <Text>count = {this.state.count}</Text>
//             </View>
//         )
//     }
// }

const MyStateComponent=()=>{
    const [count, setCount] = useState(0);
    return (
            <View>
                <Text onPress={()=>{setCount(count+1)}}>Hello</Text>
                <Text>count = {count}</Text>
            </View>   
    )
}


export default MyStateComponent;

