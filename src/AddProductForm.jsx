import {useState} from 'react';

function AddProductForm({addProduct}){ //AddProductForm will accept addProduct as a prop
    const [name, setName]= useState('');
    const [price, setPrice]= useState('');
    const [description, setDescription]= useState('');//name, price and description are set to empty strings, they will hold the values that the user types into the fields

    const handleSubmit= (e)=>{
        e.preventDefault();
        const newProduct={
            id:Date.now, //generating a unique id
            name,
            price,
            description,
        };
        addProduct(newProduct);//calling the addProduct function to add the new product
        setName('');
        setPrice('');
        setDescription('');//clearing the input fields
    } ;
return (  
    <form onSubmit ={handleSubmit}>
        <h3> Add New Product</h3>

        <div>
            <label> Name:</label>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}/> 
            
            
        </div>

        <div>
            <label> Price: </label>
            <input 
            type="text"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}></input>

            <label> Description:</label>
            <textarea
            value= {description}
            onChange= {(e)=> setDescription(e.target.value)}/>


        </div>
        <button type= "submit"> Add Product</button> {/*the form is submitted when the button is clicked */}
    </form>
);
}

export default AddProductForm;
