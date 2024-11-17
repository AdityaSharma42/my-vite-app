import React, {useState} from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm'; //importing the necessary components

function App(){
  const [products, setProducts]= useState([ 
    {id: 1, name: 'Book on Flags', price: '$40', description: 'A book with information about the flags of the world' },
    {id: 2, name: 'Map', price: '$60', description: 'A 48x72 world map to hang in your room' },
    {id: 3, name: 'Globe', price: '$70', description: 'A nice globe to decorate your room' },
  ]);

const [nextId, setNextId]= useState(4); // I have listed 3 products, so when entering the next product it will start at 4
const addProduct= (newProduct)=> {// the function adds a new product
  setProducts([...products, newProduct]);
  setNextId(nextId+1); //the next product that is added will have an id of 5 and so on
};

return(
  <div>
    <h1>Products</h1>
    <AddProductForm addProduct= {addProduct}/> {/*addProduct is passed as a prop to AddProductForm to add products*/}
    <ProductList products= {products}/>{/*products is passed as a prop to ProductList to display the products*/}
  </div>
);
}

export default App;
