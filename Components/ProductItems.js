import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductItems = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textProductTitle}>Producto: {product.name}</Text>
      <Text style={styles.textProductPrice}>Precio: {product.price} </Text>
      <Image
        style={styles.imageProduct}
        source={{uri: product.image}}
      />
      <Text style={styles.textProductDescription}>
        {product.description}
      </Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C98F92",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: "white",
  },
  textProductTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'white'
  },
  textProductPrice: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  },
  textProductDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  },
  imageProduct: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 8
  },
});

export default ProductItems;
