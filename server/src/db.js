import mysql, { createConnection } from "mysql"
const db=mysql.createConnection({
    host: 'localhost',
    user :'root',
    password: 'mohamed27562068',
    database: 'mydb'
});
db.connect((err)=>{
    if(err){
        console.log('erreur lors de la connection avec la bd')
    }else{
        console.log('connexion etablie avec succes')
    }

});
export default db;