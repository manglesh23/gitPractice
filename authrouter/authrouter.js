console.log("router file");
const express=require('express');
const { uploadFile } = require('../authcontroller/uploadFile');
const { uploadfileUsingMulter } = require('../middleware/multerMiddleware');

const router=express.Router();

router.route("/upload").post(uploadfileUsingMulter().single('file'),uploadFile);

module.exports={router};