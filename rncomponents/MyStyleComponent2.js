import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, ListViewComponent} from 'react-native';
import styles from './Styles';
const MyStyleComponent2=()=>{

    return (
        <View style={styles.container}>
            <View style={styles.container1}><Text>container1</Text></View>
            <View style={styles.container2}><Text>container2</Text></View>
            <View style={styles.container3}><Text>container3</Text></View>
        </View>
    )
}

export default MyStyleComponent2;

