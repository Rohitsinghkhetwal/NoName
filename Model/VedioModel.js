const mongoose = require("mongoose");

const VedioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const VedioModel = mongoose.model("Vedio", VedioSchema);
module.exports = VedioModel;

