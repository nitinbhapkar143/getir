const joi = require('joi');

const recordsObject = joi.object({
    startDate: joi.date().required(),
    endDate: joi.date().required(),
    minCount: joi.number().required().min(0),
    maxCount: joi.number().required().min(0),
});

exports.validate = () => (req, res, next) => {
    const { error } = recordsObject.validate(req.body);
    if(!error) return next();
    return res.status(400).json({
        code: -1,
        status: false,
        msg: error.details[0].message,
    });
  
};