const mongoose = require('mongoose')
    Schema = mongoose.Schema


const MarathonSchema = new Schema({
    name:{
        type: String,
        required:[true, 'El nombre de la maraton es requerido']
    },

    country:{
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required:[true,'El pais donde se realiza la maraton es requerido']
    },
    location:{
        type: String,
        required:[true, 'El lugar donde se realiza el maraton es requerido']
    },
    altitude: Number,
    race_web:{
        type: String,
        lowercase: true
    },
    race_logo: String,
    race_since: String,
    race_day: String,
    race_date: Date,
    race_type: {
      type: String,
      enum: ['City', 'Trail'],
      default: 'City'
    },
    distance: {
      type: Number,
      min: 42.195,
      default: 42.195
    },
    resume: String



    
})

module.exports = mongoose.model('Marathon', MarathonSchema)
