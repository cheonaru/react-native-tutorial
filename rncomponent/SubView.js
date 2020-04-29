import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

import DataContext from '../mycontext/DataContext';

//const SubView = (props) => {
    class SubView extends Component {

        static contextType= DataContext;
        id = this.props.route.params.id;
    
        goMainView = () => {
            this.props.navigation.navigate('MainView');
        }
        
        render() {
            console.log(`id=${this.id}`)
            console.log(this.id.email)
            return (
                <View style={styles.Container}>
                    <Text>Sub View</Text>
                    <Button title="to MainView" onPress={this.goMainView} />
                </View>
            )
        }
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