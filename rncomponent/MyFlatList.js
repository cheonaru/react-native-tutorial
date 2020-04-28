import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import userList from '../data/user-list.json'
import UserItem from './UserItem'

const MyFlatList = () => {
    //console.log(userList.length)
    console.log(userList[0])
    return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Text>MyFlatList</Text>
                </View>
                <FlatList
                    data={userList}
                    // renderItem={({item})=><View><Text>{item.name}</Text></View>}
                    renderItem={({item})=><UserItem item={item}/>}
                    keyExtractor={user=>user._id}
                />
            </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'violet',
        flex: 0.9,
        flexDirection: 'column',
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
});

export default MyFlatList;