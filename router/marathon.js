const Marathon = require('../models/marathon')

const apiResponse = (req,res,err,data) =>{
    if(err){
        res.status(500).send({
            message:`Error interno del servidor.${err.message}`
        })
    }else{
        if(data){
            res.status(200).send({data})
        }else{
            res.status(404).send({
                message: `No existen datos en la api con tus datos`
            })
        }
    }
}

const getMarathon = async(req,res) =>{

await Marathon
    .findById(req.params.id)
    .exec((err,data)=>apiResponse(req,res,err,data))

}
const getMarathons = async(req,res) =>{
    await Marathon
    .find({})
    .populate('country','name code')
    .sort({_id:-1})
    .exec((err,data)=>apiResponse(req,res,err,data))

}
const postMarathon = async(req,res) =>{
    let marathon = new Marathon(req.body)
    console.log(req.body)
    await marathon.save((err,data)=>apiResponse(req,res,err,data))

}
const putMarathon = async(req,res) =>{
    await Marathon.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err,data) =>apiResponse(req,res,err,data)
    )
}
const deleteMarathon = async(req,res) =>{
    await Marathon.findByIdAndRemove(
        req.params.id,
        (err,data) => apiResponse(req,res,err,data)
    )
}

module.exports = {
    getMarathons,
    getMarathon,
    postMarathon,
    putMarathon,
    deleteMarathon
}