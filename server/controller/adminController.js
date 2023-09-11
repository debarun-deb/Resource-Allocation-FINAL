const formModel = require("../models/formModel.js")


exports.queryResults = async(req,res)=>{
    let qObj = req.query;
    let results = await formModel.find(qObj);
    res.status(201).json({status:"success",data:results});
}



exports.calendarArrayObj = async(req,res)=>{
    const {user} = req;
    const {location} = user;
    console.log(user);
    try {
        let [...formDates] = await formModel.aggregate([
        {
          $match: {status: "Approved"},
          $match: {resourceName: {$in: location}},
        },
        {  $project: {
              status:1,
              location:1,
              startDate:{$dateToString:{format:"%Y-%m-%d",date:"$startDate"}},
              endDate:{$dateToString:{format:"%Y-%m-%d",date:"$endDate"}},
              _id:0,
          }
        }
      ])
  
      res.status(200).json({status:"success",data: formDates});
  }
  catch(err){
    console.log(err);
  }
  
  }
  
  