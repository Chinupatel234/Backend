import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (filePath) => {
    try{
        if(!filePath){
            return null;
        }
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        });
        // file uploaded successfully
        console.log("File is uploaded on Cloudinary! ", response.url);
        return response;
    }
    catch(error){
        fs.unlinkSync(filePath); // remove the file from our server
        return null;
    }
}

export default uploadOnCloudinary;
