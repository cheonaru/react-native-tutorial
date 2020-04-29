import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import DataContext from '../contexts/DataContext';
import {Button, Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class SearchScreen extends Component {
    state= {searchText :''}
    static contextType= DataContext;
    onSubmit=()=>{
        console.log(this.state.searchText);
        if(!this.state.searchText) {
            alert('검색단어를 입력바랍니다.');
            return;
        }
        this.context.searchText = this.state.searchText;
        this.props.navigation.navigate('MoviesListScreen');
    }

    render(){
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Movie Search</Text>
            <Image style={styles.image} source={require('../images/searchmovie.png')} />
            <TextInput style={styles.input}
                title="input search Text!"
                onChangeText={(text)=> this.setState({'searchText': text})}>
            </TextInput>
            <Icon name="spade" size={100}  onPress={this.onSubmit}/>
        </View>
        );
    }
}

const styles= StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    },
    title:{
        fontFamily: 'Verdana-Bold',
        fontSize: 40,
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {width:-1, height:1},
        textShadowRadius: 5,
    },
    image: {
        width: '80%',
        height: 100,
        borderRadius: 5,
    },
    input:{
        marginTop: 10,
        backgroundColor: '#ccc',
        width: '50%',
    }
})

export default SearchScreen;