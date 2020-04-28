import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const MyEvent = () => {
    const handerClick = () => {
        alert('btn clicked!');
    }
    const changeText = (text) => {
        console.log(text)
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
                        onPress={handerClick}
                        title="Press Me!"></Button>
                    <TextInput onChangeText={changeText}></TextInput>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    all:{
        flex:1
    },
    container: {
        backgroundColor: 'violet',
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    container1: {
        width: 150,
        height: 100,
        backgroundColor: '#76FF03',
        margin: 5,
        bottom: 0,
        right: 0,
        //겹침
        //position:'absolute'

        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        width: 150,
        height: 100,
        backgroundColor: '#00E676',
        margin: 5,

    },
    container3: {
        width: 150,
        height: 100,
        backgroundColor: '#1DE9B6',
        margin: 5,
    }
});

export default MyEvent;