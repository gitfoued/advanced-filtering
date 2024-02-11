import express from "express"
import cors from "cors"
import db from "./db.js"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}
));
const currentModulePath = dirname(fileURLToPath(import.meta.url));
const imagePath = join(currentModulePath, '.', 'images');


app.use('/images',express.static(imagePath))
app.get('/',(req,res)=>{
 const sql=`SELECT * FROM products` 

 db.query(sql,(err,results)=>{
    if(err){
        console.error('Erreur lors de la chargement des donnees')
        results.status(500).json({err:'erreur lors de la recuperation'})
        return;
    }
    if(results.length ===0) {
        res.status(404).json({message:'Donnees not Found'})
return;    
    }
    const dataarray=Array.isArray(results) ? results:[results]
    res.json(dataarray);
 })
});
export default app;