import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList} from 'react-native';
import userList from '../data/user-list.json';
import UserItem from './UserItem';
const MyFlatList=()=>{
    console.log(userList[0]);
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text>MyFlatList</Text>
            </View>
            <FlatList 
                data={userList}
                renderItem={({item})=><UserItem item={item} />}
                keyExtractor={user=>user._id}
            />
        </View>
    )
}

const styles= StyleSheet.create({
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
export default MyFlatList;