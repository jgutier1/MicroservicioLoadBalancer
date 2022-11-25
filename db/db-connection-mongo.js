const mongoose = require("mongoose");

const getconnection= async ()=> {
    try{
        const url = "mongodb://Proyecto-database:27017/Proyecto";
        await mongoose.connect(url);
    
        console.log("conexion exitosa");

    }catch (error){
        console.log(error);
    }
   

}
module.exports= {
    getconnection,
}