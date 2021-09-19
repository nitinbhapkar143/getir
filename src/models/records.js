const mongoose = require('mongoose');

const recordsSchema = new mongoose.Schema(
  {
    key: String,
    createdAt: Date,
    counts: [{ type: Number }],
    value: String
  },
  { collection: 'records' }
);

recordsSchema.index({ createdAt: 1 });

module.exports = mongoose.model('records', recordsSchema);