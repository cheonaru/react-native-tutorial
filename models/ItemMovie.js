import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import DataContext from '../contexts/DataContext';
import {Button, Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class ItemMovie extends Component {
    static contextType= DataContext;

    onSubmit = (navigation, imdbID) => {
        this.context.id= imdbID;
        navigation.navigate('MovieDetailScreen', { id: imdbID });
    }

    render() {
        let imageUri = this.props.movie.Poster;
        let imdbID = this.props.movie.imdbID;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: imageUri }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text>{this.props.movie.Year}</Text>
                    <Text>{this.props.movie.Title}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Chip title="Detail" onPress={() => this.onSubmit(this.props.navigation, imdbID)}>Detail</Chip>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 100,
        margin: 5,
    },
    imageContainer: {
        width: '20%',
        height: '90%',
    },
    image: {
        height: '100%',
        borderRadius: 20,

    },
    buttonContainer: {
        marginRight: 10,
    }
}
);
export default ItemMovie;