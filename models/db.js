const mongoose = require('mongoose')
    config = require('../config')

class DataBases{
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect(process.env.URL_DB,{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() =>console.log(`conexion exitosa al servidor de mongoDB ${process.env.URL_DB}`))
        .catch(err => console.log(`Error en la conexion a la base de datos ${err}`))
    }
}

module.exports = new DataBases()