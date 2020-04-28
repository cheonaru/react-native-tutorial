import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MyStyleComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'violet',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer:{
        width:300,
        height:400,
        //backgroundColor:'cyan'
        //backgroundColor:'#9c1'
        backgroundColor:'#76FF03',
        borderRadius:150,
        borderWidth:5,
        borderColor:'#6D214F'
    }
});
export default MyStyleComponent;