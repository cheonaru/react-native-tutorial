import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import MoviesListScreen from './MoviesListScreen';
import DataContext from '../contexts/DataContext';

const movie= {
    "Title": "Hello, My Name Is Doris",
    "Year": "2015",
    "Rated": "R",
    "Released": "01 Apr 2016",
    "Runtime": "90 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Michael Showalter",
    "Writer": "Laura Terruso (screenplay), Michael Showalter (screenplay), Laura Terruso (short film \"Doris & the Intern\")",
    "Actors": "Sally Field, Edmund Lupinski, Norma Michaels, Stephen Root",
    "Plot": "A self-help seminar inspires a sixty-something woman to romantically pursue her younger co-worker.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 wins & 10 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.6/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "63/100"
        }
    ],
    "Metascore": "63",
    "imdbRating": "6.6",
    "imdbVotes": "18,029",
    "imdbID": "tt3766394",
    "Type": "movie",
    "DVD": "14 Jun 2016",
    "BoxOffice": "$14,443,077",
    "Production": "Red Crown Productions",
    "Website": "N/A",
    "Response": "True"
}
class MovieDetailScreen extends Component {

    realData= '';

    state= {isLoading:true};
    static contextType= DataContext;

    componentDidMount(){
        // console.log('MovieDetailScreen');
        // console.log('imdbID='+ this.props.route.params.id);
        this.getData();
    }
    //http://www.omdbapi.com/?apikey=8c59afe8&i=tt3766394
    getData(){
        // id= this.props.route.params.id;
        id= this.context.id;
        // console.log('getData, id='+ id);
        fetch('http://www.omdbapi.com/?apikey=8c59afe8&i='+id,{
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            }
        }).
        then(response=>response.json()).
        then(responseJson=>{
            this.realData= responseJson;
            this.setState({isLoading:false});
        })
    }


    render(){
        if(this.isLoading){
            <View><Text>is Loading!</Text></View>
        }
        return (
            <View style={styles.container}>
            <Text>{this.realData.Title}</Text>
            <View style={styles.imageContainer}>
                
            <Image style={styles.image} source={{uri:this.realData.Poster}}></Image>
            </View>
            <Text>Year: </Text>
            <Text>BoxOffice: </Text>
            <Text>Production : </Text>
        </View>
    )
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer:{
        height: '60%',
        width: '90%',
        margin: 15,
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default MovieDetailScreen;