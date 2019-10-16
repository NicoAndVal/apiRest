const express  = require('express')
    api = express.Router()
    Country = require('./router/country')
    Marathon = require('./router/marathon')


api.get('/', async(req,res)=>{
    await res.status(200).send({
        message:'Funcionando la api restFull de maratones'
    })
})

api.post('/countries',Country.postCountries)
api.get('/countries',Country.getCountries)

api.get('/marathons', Marathon.getMarathons)
api.post('/marathon', Marathon.postMarathon)
api.get('/marathon/:id', Marathon.getMarathon)
api.put('/marathon/:id', Marathon.putMarathon)
api.delete('/marathon/:id',Marathon.deleteMarathon)

module.exports = api