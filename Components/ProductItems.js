import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductItems = ({product}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textProductTitle}>Nombre producto: {product.name}</Text>
            <Text style={styles.textProductPrice}>Precio: {product.price} </Text>
            <Text style={styles.textProductDescription}>Descripcion: {product.description}</Text>
        </View>
    );
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DEAAA0',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: 'white'
    },
    textProductTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProductPrice: {
        fontSize: 16
    },
    textProductDescription: {
        fontSize: 14
    }
});

export default ProductItems;