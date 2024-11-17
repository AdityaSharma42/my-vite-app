function ProductItem({product}){
    return(
        <li>
            <h3> {product.name}</h3>
            <p> {product.price}</p>
            <p> {product.description}</p>
        </li>
    );

}

export default ProductItem;