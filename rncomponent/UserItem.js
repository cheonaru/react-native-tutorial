import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';



const UserItem = ({ item }) => {
    const listClick = () => {
        alert(item._id+"\b\b\b\b"+item.name);
    };
    return (
        <TouchableOpacity onPress={listClick}>
            <View style={styles.all} >
                <View style={styles._idContainer}><Text>{item._id}</Text></View>
                <View><Text>{item.name}</Text></View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'cyan',
        alignItems: 'center',
    },
    _idContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#ccc',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default UserItem;