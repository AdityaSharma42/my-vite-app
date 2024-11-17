function ProductItem({product}){
    return(
        //displaying the products in a list
        <li>
            <h3> {product.name}</h3>
            <p> {product.price}</p>
            <p> {product.description}</p>
        </li>
    );

}

export default ProductItem;