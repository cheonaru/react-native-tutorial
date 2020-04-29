import React, { Component, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import DataContext from '../mycontext/DataContext';

const MainView=(props)=>{
    const myContext= useContext(DataContext);
// class MainView extends Component {

    // static contextType= DataContext;

    const goSubView=()=>{
        console.log('goSubView');
        console.log(myContext.name);
        myContext.email = 'hahajava@naver.com';
        props.navigation.navigate('SubView',{id:'hahajava'});
    }
    // render(){
        return (
            <View style={styles.Container}>
                <Text>Main View</Text>
                <Button title="to SubView" onPress={goSubView} />
            </View>
        )

    // }

}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default MainView;