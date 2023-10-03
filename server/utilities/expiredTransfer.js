const form = require("../models/formModel");
const Expired = require("../models/expiredModel");

exports.dataTransfer = async (req, res) => {
  try {
    const current = Date.now();
    const query = {
      $or: [
        {
          $and: [{ startDate: { $lte: current } },{ status: { $in: ["Submitted", "Cancelled"] } }],
        },
        {
          $and: [{ endDate: { $lte: current } }, { status: "Approved" }],
        },
      ],
    };
    const docsToTransfer = await form.find(query)
    if (docsToTransfer.length > 0) {
      const transferdocs = await Expired.insertMany(docsToTransfer);
      console.log(`${docsToTransfer.length} documents transferred`);
      const deleteResult = await form.deleteMany({ _id: { $in: docsToTransfer.map(doc => doc._id) } });
      console.log(`${deleteResult.deletedCount} documents deleted`);
    } else {
      console.log("No documents to transfer");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
