const { json } = require("express");
const formModel = require("../models/formModel.js");
const batchSize = 50;

exports.queryResults = async (req, res) => {
  let qObj = req.query;
  let results = await formModel.find(qObj);
  res.status(201).json({ status: "success", data: results });
};

exports.calendarArrayObj = async (req, res) => {
  const { user } = req;
  const { location } = user;
  console.log(user);
  try {
    let [...formDates] = await formModel.aggregate([
      {
        $match: { status: "Approved" }, // this match is not wokring properly
      },
      {
        $match: { resourceName: location },
      },
      {
        $project: {
          startDate: {
            $dateToString: { format: "%Y-%m-%d", date: "$startDate" },
          },
          endDate: { $dateToString: { format: "%Y-%m-%d", date: "$endDate" } },
          _id: 0,
        },
      },
    ]);

    res.status(200).json({ status: "success", data: formDates });
  } catch (err) {
    console.log(err);
  }
};


exports.getStartDates = async (req, res) => {
  let qObj = req.body;
  try{
    let results = await formModel.find(qObj, {_id:0,startDate:1});
    if (results.length > 0) res.status(201).json({ status: "success", data: results });
    else res.status(404).json({ status: "no matching documents", data:[]});
}
catch(err){
  res.status(404).json({ status: "fail", data: err.message});
}
}

exports.getAllRequests = async (req, res) => {

  let startDate = new Date(req.body.startDate);
  let resName = req.body.resourceName;

  var resDateList = {
    "Seminar Hall":[],
    "Multipurpose Hall":[],
    "Central Computing Facility":[]
  };

  try{
    let results = await formModel.find({}, {_id:0,startDate:1,resourceName:1});
    console.log(results);
    results.forEach((request)=>{
      let r = request.resourceName;
      resDateList[r].push(request.startDate);
    })

    if (results.length > 0) res.status(201).json({ status: "success", data: resDateList });
    else res.status(404).json({ status: "no matching documents", data:[]});
}
catch(err){
  res.status(404).json({ status: "fail", data: err.message});
}
}




//Testing required for below 3
function deleteBatch(collection,documents){
  var bulkDelete = collection.initializeUnorderedBuldOp();
  documents.forEach(function(doc){
    bulkDelete.findOneAndDelete({_id: doc._id});
  })
  bulkRemove.execute();
}

function insertBatch(collection,documents){
  var bulkInsert = collection.initializeUnorderedBuldOp();
  var idsToTransfer = [];
  var id;

  documents.forEach(function(doc){
    id = doc._id;
    bulkInsert.find({_id:id}).upsert().replaceOne(doc);
    idsToTransfer.execute();
    return idsToTransfer;
  })
}


exports.transferDocuments = async () => {
  filter = {startDate:{$lt:Date.now()}}
  const targetCollection = "";
  const sourceCollection = "";
  console.log("Moving " + sourceCollection.find(filter).count() + " documents from " + sourceCollection + " to " + targetCollection);
  var count;
  while ((count = sourceCollection.find(filter).count()) > 0) {
    console.log(count + " documents remaining");
    sourceDocs = sourceCollection.find(filter).limit(batchSize);
    idsOfCopiedDocs = insertBatch(targetCollection, sourceDocs);

    targetDocs = targetCollection.find({_id: {$in: idsOfCopiedDocs}});
    deleteBatch(sourceCollection, targetDocs);
  }
  console.log("Transfer Complete");


}