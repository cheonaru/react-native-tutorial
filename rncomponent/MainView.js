import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';



const MainView=(props)=>{

    const goSubView=()=>{
        console.log('goSubView');
        props.navigation.navigate('SubView',{id:'hahajava'});
    }
    return (
        <View style={styles.Container} >
            <Text>Main View</Text>
            <Button title="to SubView" onPress={goSubView}/>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default MainView;