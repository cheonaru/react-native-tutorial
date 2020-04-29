import React, { Component } from 'react'
import { View, Text } from 'react-native'

class FetchView extends Component {

    //http://www.omdbapi.com/에서 api key 받아야
    componentDidMount = () => {
        url = 'http://omdbapi.com/?apikey=85e1dfd6&s=Scar';
        fetch(url, {
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
        })
        .then(response=>response.json())
        .then((responseJson)=>{
            console.log(responseJson);
        });
    }

    render() {
        return (
            <View><Text>Fetch</Text></View>
        )
    }
}
export default FetchView;