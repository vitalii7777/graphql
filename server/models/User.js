const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number },
    createdAt: { type: String },
});

module.exports = model('User', schema);
