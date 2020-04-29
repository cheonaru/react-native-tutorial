import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, ListViewComponent} from 'react-native';

const colorList= ['cyan', 'violet', 'magenta', 'orange', 'black'];
let index= 0;

const MyImageComponent=()=>{
    const [color, setColor] = useState(colorList[0]);
    const changeColor=()=>{
        console.log('changeColor');
        index++;
        console.log(index % (colorList.length+1));
        setColor(colorList[index]);
    }

    return (
    <View style={[styles.container, {backgroundColor: color}]}>
        <Text onPress={changeColor}>Change Color</Text>
        <Text>image</Text>
        <Image style={{width:50, height:50}} source={require('../images/dog.png')}></Image>
        <Image style={{width:50, height:50}} 
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
    </View>   
    )
}
const styles= StyleSheet.create({
    container: {
        backgroundColor: 'magenta',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default MyImageComponent;

