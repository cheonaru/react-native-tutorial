import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product: {
            ...product,
            id: uuidv4(),
        }
    }
}

export const deleteProduct = (product) => {
    return (
        {
            type: DELETE_PRODUCT,
            product
        }
    )
}