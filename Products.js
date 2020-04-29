import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import {addProduct, deleteProduct} from './myredux/actions';
const initialState = {
    name: '',
    maker: ''
}

class Products extends Component {

    state = initialState;

    addProduct=()=>{
        this.props.dispatchAddProduct(this.state);
        this.setState(initialState);
    }

    updateInput = (key, value)=>{
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    deleteProduct=(product)=>{
        this.props.dispatchDeleteProduct(product);
    }

    render(){
        const {products} = this.props;
        return(
            // <View><Text>Products</Text></View>
            <View>
            {products.map((product)=>
                <View style={styles.product}>
                    <Text>Model:{product.name}</Text>
                    <Text>, maker:{product.maker}</Text>
                    <Text onPress={()=>this.deleteProduct(product)}>, id:{product.id}</Text>
                </View>
            )}
            <View style={styles.btnContainer}>
                <TextInput placeholder='name' value={this.state.name} 
                    onChangeText={value=>this.updateInput('name', value)}/>
                <TextInput placeholder='maker' value={this.state.maker} 
                    onChangeText={value=>this.updateInput('maker', value)}/>
                <Button title="Add" onPress={this.addProduct}/>
            </View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    product: {
        flexDirection: 'row'
    },
    btnContainer:{
        flexDirection: 'row'
    }
});
const mapStateProps = (state) =>({
    products: state.productReducer.products
});
const mapDispatchToProps= {
    dispatchAddProduct: (product)=> addProduct(product),
    dispatchDeleteProduct: (product)=> deleteProduct(product)
}
export default connect(mapStateProps, mapDispatchToProps)(Products);