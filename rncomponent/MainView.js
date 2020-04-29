import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import DataContext from '../mycontext/DataContext';


//const MainView=(props)=>{
class MainView extends Component {

    static contextType = DataContext;

    goSubView = () => {
        console.log('goSubView');
        console.log(this.context.name);
        this.context.email='hahajava'
        this.props.navigation.navigate('SubView', { id: 'hahajava' });
    }
    render() {
        return (
            <View style={styles.Container} >
                <Text>Main View</Text>
                <Button title="to SubView" onPress={this.goSubView} />
            </View>
        )
    }
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