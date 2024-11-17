import React from 'react'
import ProductItem from './ProductItem';

function ProductList ({products}){ //'products' prop is accepted by ProductList and it displays the products
    return (
       <div>
        <h2> Products </h2>
        <ul>
            {products.map((product)=>(
                <ProductItem key={product.id} product= {product}/> //The id is used as the key prop

            ))}
        </ul>
       </div> 
    );
}
export default ProductList; //exporting ProductList
