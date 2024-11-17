import React, {useState} from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App(){
  const [products, setProducts]= useState([
    {id: 1, name: 'Book on Flags', price: '$40', description: 'A book with information about the flags of the world' },
    {id: 2, name: 'Map', price: '$60', description: 'A 48x72 world map to hang in your room' },
    {id: 3, name: 'Globe', price: '$70', description: 'A nice globe  ' },
  ]);

const [nextId, setNextId]= useState(4);
const addProduct= (newProduct)=> {
  setProducts([...products, newProduct]);
  setNextId(nextId+1);
};

return(
  <div>
    <h1>Product Dashboard</h1>
    <AddProductForm addProduct= {addProduct}/>
    <ProductList products= {products}/>
  </div>
);
}

export default App;
