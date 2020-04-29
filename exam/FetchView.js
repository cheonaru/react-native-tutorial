import React, {Component} from 'react';
import {View, Text} from 'react-native';

class FetchView extends Component {

    componentDidMount=()=>{
        console.log('componentDidMount');
        url = 'http://www.omdbapi.com/?apikey=8c59afe8&s=Scar';
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response=>response.json())
        .then(responseJson=>{
            console.log(responseJson);
        });
    }

    render(){
        return (
            <View><Text>Fetch</Text></View>
        )
    }
}
export default FetchView;