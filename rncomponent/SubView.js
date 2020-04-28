import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';



const SubView = (props) => {
    const goMainView=()=>{
        console.log('goSubView');
        props.navigation.navigate('MainView');
    }
    let id = props.route.params.id;
    console.log(`id=${id}`);
    return (
        <View style={styles.Container}>
            <Text>Sub View</Text>
            <Button title="to MainView" onPress={goMainView} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'violet',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default SubView;