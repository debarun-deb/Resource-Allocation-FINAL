const formModel = require("../models/formModel.js")


exports.queryResults = async(req,res)=>{
    let qObj = req.query;
    let results = await formModel.find(qObj);
    res.status(201).json({status:"success",data:results});
}


exports.calendarArrayObj = async(req,res)=>{
    // let [...formDates]  = await formModel.find({},{startDate:1,endDate:1,_id:0});
    let [...formDates] = await formModel.aggregate([
      {  $project: {
            startDate:{$dateToString:{format:"%Y-%m-%d",date:"$startDate"}},
            endDate:{$dateToString:{format:"%Y-%m-%d",date:"$endDate"}},
            _id:0
        }
    }
])
    res.status(200).json({status:"success",data:formDates});
}