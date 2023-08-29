const formModel = require("../models/formModel.js")


exports.queryResults = async(req,res)=>{
    let qObj = req.query;
    let results = await formModel.find(qObj);
    res.status(201).json({status:"success",data:results});
}