const multer = require("multer");
const path = require("path");
const uploadfileUsingMulter = () => {
  try {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploadedFile");               // Destination directory where uploaded files will be stored
      },
      filename: function (req, file, cb) {
        console.log("Request In multer:-",req);
        console.log("file in multer",file);
        cb(
          null,
          file.originalname
        ); // File naming convention
      },
    });
    const upload = multer({ storage: storage });
    return upload;
  } catch (e) {
    return {
      error: true,
      details: e,
    };
  }
};

module.exports = { uploadfileUsingMulter };
