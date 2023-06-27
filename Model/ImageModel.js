const mongoose =  require("mongoose");

const Images = new mongoose.Schema({
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
}
)

const ImageModel = mongoose.model("Img", Images);
module.exports = ImageModel;
