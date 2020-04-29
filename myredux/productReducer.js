import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';
import { ADD_PRODUCT, DELETE_PRODUCT } from './actions';

const initialState = {
    products: [{ name: 'ZFlip', maker: 'Samsung', id:uuidv4(), }]
}

const productReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_PRODUCT:
            return {
                products: [
                    ...state.products,
                    actions.product
                ]
            }

            case DELETE_PRODUCT:
                const index = state.products.findIndex(product=>product.id==actions.product.id)
                return{
                    products: [
                        ...state.products.splice(0,index),
                        ...state.products.splice(index+1)
                    ]
                }
        default:
            return state;
    }
}

export default productReducer;