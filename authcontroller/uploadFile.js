// const { error } = require("console")
const fs = require('fs');
const csv = require('csv-parser');
const path=require('path')
console.log("Uploaded File Through Mutler");

const convertCSVtoJSON = async(filePath) => {
   const jsonArray = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                jsonArray.push(row);
            })
            .on('end', () => {
                resolve(jsonArray);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

const uploadFile=async(req,res)=>{
    try{
        console.log("Request:-",req.file)
        console.log("Path:-",req.file.path);
        let convertedFile = await convertCSVtoJSON(req.file.path);
        console.log("Converted File:-", convertedFile);
        console.log("Length:-",convertedFile.length);
        res.status(200).json({ message: `File Upload and data is ${convertedFile.length}` });
   
       
    }catch(e){
        console.error(e);
        return{
            error:true,
            details:e
        }
    }
}

module.exports={uploadFile};