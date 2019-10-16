const mongoose = require('mongoose')
    Schema = mongoose.Schema

const CountrySchema = new Schema({
    code: {
        type: String,
        required: [true, 'El código del país es requerido'],
        unique: true
      },
      name: {
        type: String,
        required: [true, 'El nombre del país es requerido'],
        unique: true
      }
})

module.exports = mongoose.model('Country',CountrySchema)