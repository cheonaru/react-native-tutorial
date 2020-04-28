import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        backgroundColor: 'violet',
        flex: 0.9,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        flexWrap:'wrap'
    },
    container1: {
        width: 150,
        height: 100,
        backgroundColor: '#76FF03',
        margin: 5,
        bottom: 0,
        right: 0,
        //겹침
        //position:'absolute'

        justifyContent:'center',
        alignItems:'center',
    },
    container2: {
        width: 150,
        height: 100,
        backgroundColor: '#00E676',
        margin: 5,

    },
    container3: {
        width: 150,
        height: 100,
        backgroundColor: '#1DE9B6',
        margin: 5,
    }
});