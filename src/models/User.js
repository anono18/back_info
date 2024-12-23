const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    date_naiss: {
        type: Date,
        required: true
    },
    work: {
        type: String,
    },
    links: {
        type: [String],
        default: []
    },
    imageUrl: {
        type: String,
        default: '',
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
