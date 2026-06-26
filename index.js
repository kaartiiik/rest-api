const express = require("express");
const app = express() ;
const products = require("./data/product");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is the root page") ;
}); 

app.get("/products",(req,res)=>{
    res.send(products);
});
app.get("/products/:id",(req,res)=>{
    const id = Number(req.params.id); 
    const product = products.find((p)=>p.id === id); 
    if(!product){ 
        return res.status(404).json({ 
            message : "No product exist with this id" 
        }) 
    } 
    res.status(200).json(product); 
}); 
app.post("/products",(req,res)=>{ 
    const newproduct  = req.body ;  
    if(!newproduct){ 
        return res.status(400).json({message : "no product in body"}); 
    } 
    products.push(newproduct); 
    return res.status(201).json({message:"Product added"}) 
     
}) 
app.put("/products/:id",(req,res)=>{ 
     const id = Number(req.params.id);  
     const index = products.findIndex((p)=>p.id === id); 
     if(index === -1){ 
        res.status(404).json({message : "No such product exist"});  
     } 
     products[index] = req.body ; 
     res.status(200).json({message:"Prosuct updated successfully",product:products[index]}); 
}) 
app.patch("/products/:id",(req,res)=>{ 
    const id = Number(req.params.id);  
    const product = products.find((p)=>p.id == id ); 
    if(!product){ 
        res.status(404).json({message : "No such products exist"});  
    } 
    Object.assign(product,req.body);  
    res.status(200).json({message : "Product updated  successfully"}) 
}) 
app.delete("/products/:id",(req,res)=>{ 
    const id = Number(req.params.id); 
    const index  = products.findIndex((p)=>p.id === id); 
    if(index === -1){ 
        res.status(404).json({message : "No product found with this id"}) 
    } 
    const deletedProduct = products.splice(index,1);  
    res.status(200).json({message : "Product deleted successfully",product : deletedProduct[0]}) 
 
}) 
 
app.listen(8080 , ()=>{ 
    console.log("port is running on 8080"); 
});  
    const id = Number(req.params.id);
    const product = products.find((p)=>p.id === id);
    if(!product){
        return res.status(404).json({
            message : "No product exist with this id"
        })
    }
    res.status(200).json(product);
});


app.post("/products",(req,res)=>{
    const newproduct  = req.body ; 
    if(!newproduct){
        return res.status(400).json({message : "no product in body"});
    }
    products.push(newproduct);
     res.send(products);
    return res.status(201).json({message:"Product added"})
    
})

app.listen(8080 , ()=>{
    console.log("port is running on 8080");
}); 
