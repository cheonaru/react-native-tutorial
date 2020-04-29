import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableNativeFeedback} from 'react-native';
import DataContext from '../contexts/DataContext';

class SearchScreen extends Component {
    state= {searchText :''}
    static contextType= DataContext;
    onSubmit=()=>{
        console.log(this.state.searchText);
        this.context.searchText = this.state.searchText;
        this.props.navigation.navigate('MoviesListScreen');
    }

    render(){
        return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <TextInput 
                title="input search Text!"
                onChangeText={(text)=> this.setState({'searchText': text})}>
            </TextInput>
            <Button title="Search Movies!" onPress={this.onSubmit}></Button>
        </View>
        );
    }
}

const styles= StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})

export default SearchScreen;