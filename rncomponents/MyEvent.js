import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
const MyEvent=()=>{
    const handlerClick=()=>{
        alert('handlerClick');
    }
    const changeText=(text)=>{
        console.log(text);
        setInputText(text);
    }
    const allTouch=()=>{
        console.log('allTouch');
    }
    const [inputText, setInputText] = useState('');

    return (
        <TouchableOpacity style={styles.all} onPress={allTouch}>
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text>{inputText}</Text>
                <Button 
                    onPress={handlerClick}
                    title="Press Me!"></Button>
                <TextInput onChangeText={changeText}></TextInput>
            </View>
        </View>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    all: {
        flex: 1,
    },
    container: {
        backgroundColor: 'cyan',
        flex : 1,
        alignItems: 'center',
    },
    container1:{
        width: 150,
        height: 100,
        backgroundColor: '#03fc62',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default MyEvent;