import {useState} from 'react';

function AddProductForm({addProduct}){
    const [name, setName]= useState('');
    const [price, setPrice]= useState('');
    const [description, setDescription]= useState('');

    const handleSubmit= (e)=>{
        e.preventDefault();
        const newProduct={
            id:Date.now,
            name,
            price,
            description,
        };
        addProduct(newProduct);
        setName('');
        setPrice('');
        setDescription('');
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
        <button type= "submit"> Add Product</button>
    </form>
);
}

export default AddProductForm;
