const recordsDataAccess = require("../dataAccess/records");

exports.getRecords = async ({ startDate, endDate, minCount, maxCount }) => {
    try{
        return await recordsDataAccess.get(startDate, endDate, minCount, maxCount);
    }catch(err){
        throw err
    }
}
