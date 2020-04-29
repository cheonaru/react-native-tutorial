import React, { Component, useState, useContext } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

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
            <View style={styles.container}>
                <Text>Sub View</Text>
                <Button title="to MainView" onPress={goMainView}/>
            </View>
        )
    // }
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'violet',
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default SubView;