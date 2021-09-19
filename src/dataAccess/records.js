const recordsModel = require('../models/records');

exports.get = async (startDate, endDate, minCount, maxCount) => {
    try {
        const pipeline = [
            {
                $match : {
                    createdAt: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate),
                    },
                },
            },
            {
                $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: {
                    $reduce: {
                        input: "$counts",
                        initialValue: 0,
                        in: {
                            $add: ["$$value", "$$this"],
                        },
                    },
                },
                },
            },
            {
                $match: {
                    totalCount: {
                        $gte: parseInt(minCount),
                        $lte: parseInt(maxCount)
                    }
                }
            }
        ];
        return await recordsModel.aggregate(pipeline).allowDiskUse(true).exec();
    }catch(err){
        throw err;
    }
}