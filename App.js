import { StyleSheet, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from "./Components/SearchBar";
import ProductsList from "./Components/ProductsList";
import products from "./data.js";

export default function App() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    if (search === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.name.includes(search));
      setFilteredProducts(filtered);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch}/>
      <ProductsList products={filteredProducts}/>
      {/* {console.log(filteredProducts)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200
  }
});
