import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const colorList = ['cyan', 'violet', 'magenta', 'orange']

const MyImageComponent = () => {
    const [color, setColor] = useState(colorList[0]);
    const changeColor=()=>{
        setColor(colorList[Math.ceil(Math.random()*4)]);
        console.log('changeColor');
    }

    return (
        <View style={styles.container, {backgroundColor : color}}>
            <Text onPress={changeColor}>Change Color</Text>
            <Text>image</Text>
            <Image style={{ width: 50, height: 50 }} source={require('../images/dog.png')}></Image>
            {/* <Image style={{ width: 50, height: 50 }}
                source={{ url: 'https://image.flaticon.com/icons/svg/1076/1076928.svg' }}></Image> */}
        </View>
    )
}

//changeColor는 함수 선언
//changeColor()는 호출

const styles = StyleSheet.create({
    container: {
        backgroundColor:'violet',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default MyImageComponent;