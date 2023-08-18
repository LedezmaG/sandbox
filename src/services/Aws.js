const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const uploadVideo = async ({ fileName, fileFormat, fileSrc}) => {
    try {
        const data = require('fs').readFileSync(fileSrc);
        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: fileName, 
            Body: data, 
            ContentType: fileFormat 
        };
    
        const uploadData = await s3.upload(params).promise();
    
        console.log('Archivo subido exitosamente:', uploadData.Location);
        
        return {
            status: true,
            result: uploadData
        }
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        return {
            status: false,
            msg: error.message
        }
    }
}


module.exports = {
    uploadVideo
};
