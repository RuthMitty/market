import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductItems from "./ProductItems";

const ProductList = ({products}) => {
    return(
        <>
        <FlatList 
            style={styles.flatlist}
            data={products} 
            keyExtractor = {
            product => product.id.toString()
            }
            renderItem={({item})=>(
                <ProductItems product={item}/>
            )}
        />
        </>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        top: 150,
        backgroundColor: '#FAECE6',
        padding: 10
    }
})

export default ProductList;