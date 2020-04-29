import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import data from '../data/movielist.json';
import ItemMovie from '../models/ItemMovie';
import DataContext from '../contexts/DataContext';

class MoviesListScreen extends Component {
    realData= [];

    state= {isLoading:true};
    static contextType= DataContext;

    componentDidMount(){
        this.getData();
    }
    getData(){
        let searchText= this.context.searchText;
        console.log('searchText='+searchText);
        fetch('http://www.omdbapi.com/?apikey=85e1dfd6&s='+searchText, {
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            
        }).
        then(response=>response.json()).
        then(responseJson=>{
            console.log(responseJson.Search);
            this.realData= responseJson.Search;
            console.log('realData='+ this.realData);
            this.setState({isLoading:false});
            console.log('getData is done!');
        });
    }
    
    render(){
        if(this.state.isLoading) {
            return (
                <View><Text>is Loading</Text></View> 
            );
        }
        return (
                <View>
                <FlatList
                    data={this.realData}
                    renderItem={({item})=> <ItemMovie navigation={this.props.navigation} movie={item}></ItemMovie>}
                    keyExtractor={item=>item.imdbID}
                    />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

export default MoviesListScreen;
