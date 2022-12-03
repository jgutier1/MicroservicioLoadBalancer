const mongoose = require("mongoose");

const getconnection= async ()=> {
    try{
        const url = "mongodb://proyecto-database:27017/proyecto";
        await mongoose.connect(url);
    
        console.log("conexion exitosa");

    }catch (error){
        console.log(error);
    }
   

}
module.exports= {
    getconnection,
}