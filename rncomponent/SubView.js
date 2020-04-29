import React, { Component, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import DataContext from '../mycontext/DataContext';

const SubView=(props)=>{
    // class SubView extends Component {
        // static contextType= DataContext;
        const myContext= useContext(DataContext);
        let id = props.route.params.id;
    
        const goMainView=()=>{
            props.navigation.navigate('MainView');
        }
        
        // render(){
            console.log(`id=${id}`);
            console.log(myContext.email);
            return (
                <View style={styles.Container}>
                    <Text>Sub View</Text>
                    <Button title="to MainView" onPress={goMainView}/>
                </View>
            )
        // }
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