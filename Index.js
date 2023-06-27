const express = require("express");
const cors = require("cors");
const upload = require("./Connection/FileUploads");
const HospitalImg = require("./Model/ImageModel");
const uploadFile = require("./Connection/VedioUpload");
const HospitaLVedio = require("./Model/VedioModel");


const app = express();
const PORT = 5050;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
require("./Connection/Connection.js");

//Api for image upload

app.post("/img", upload.single("image"), async (req, resp) => {
  try {
    const { originalname, path } = req.file;

    const data = new HospitalImg({
      name: originalname,
      path,
    });
    await data.save();
    resp.status(201).json({ message: "Image uploaded successfully" });
  } catch (err) {
    resp.status(400).send(err);
    throw err;
  }
});

app.get("/showall", async (req, resp) => {
  try {
    const data = await HospitalImg.find();
    resp.status(200).send(data);
  } catch (err) {
    resp.status(401).send(err);
    throw err;
  }
});

//api for vedio upload

app.post("/Vedio", uploadFile.single("vedio"), async (req, resp) => {
  try {
    const { originalname, path } = req.file;
    const result = new HospitaLVedio({
      name: originalname,
      path,
    });
    await result.save();
    resp.status(200).send({ message: "Vedio file saved successfully.." });
  } catch (err) {
    resp.status(400).send({ message: "somethig went wrong......" });
    console.log(err);
    throw err;
  }
});

app.get("/getVedios", async(req, resp) => {
  try{
    const result = await HospitaLVedio.find();
    resp.status(200).send(result);

  }catch(err){
    resp.status(400).send({message: "Something went wrong--------!"})
    console.log(err);
    throw(err);
  }
})

app.listen(PORT, () => {
  console.log(`server is up and running at ${PORT}`);
});
