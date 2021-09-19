const express = require('express');
const router = express.Router();
const recordsServive = require("../services/records");
const validator = require("../middleware/validator")

/**
 * @api {post} /api/records Get Records
 * @apiVersion 0.0.1
 * @apiName getRecords
 * @apiGroup Records
 * @apiDescription Get Records.
 * 
 * @apiParam {String} startDate                                Mandatory start date.
 * @apiParam {String} endDate                                  Mandatory end date.
 * @apiParam {String} minCount                                 Mandatory min count.
 * @apiParam {String} maxCount                                 Mandatory max count.
 *
 * 
 * @apiSuccess {Number} status                                 Status of the api.
 * @apiSuccess {Array} records                                 Array of records.
 * @apiSuccess {String} msg                                    Message of the api.
 * 
 */

router.post('/records',validator.validate(), async (req, res, next) => {
  try{    
    const records = await recordsServive.getRecords(req.body);
    return res.status(200).json({ code : 0, msg : "Records fetched successfully.", records })
  }catch(err){
    next(err, req, res, next);
    throw err
  }
});


module.exports = router;
