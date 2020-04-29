import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, ListViewComponent} from 'react-native';

const MyStyleComponent=()=>{

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}></View>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        backgroundColor: 'magenta',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer:{
        width: 300,
        height: 400,
        backgroundColor: '#03fc62',
        borderRadius: 150,
        borderColor: 'red',
        borderWidth: 5,
    }
});
export default MyStyleComponent;

