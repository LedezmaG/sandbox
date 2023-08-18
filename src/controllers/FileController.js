const Files = require("../models/files/Files");
const { uploadVideo } = require("../services/Aws");

const GetAll = async (req, res = response) => {
    try {
        
        const resp = await Files.findAll();

        return res.status(200).json({
            status: true,
            results: { resp }
        });
    } catch (error) {
        return res.status(400).json({ status: false, messaje: error.message });
    }
};

const GetById = async (req, res = response) => {
    try {
        const { id } = req.params;

        const resp = await Files.findByPk(id);
        
        return res.status(200).json({
            status: true,
            results: { resp }
        });
    } catch (error) {
        return res.status(400).json({ status: false, messaje: error.message });
    }
};

const Create = async (req, res = response) => {
    try {
        const { file } = req.body;
        const fileInfo = {
            fileName: `video_prueba_il_${Math.floor(Math.random() * 101)}`,
            
        }

        const video = await uploadVideo({
            fileName: `video_prueba_il_${Math.floor(Math.random() * 101)}`,
            fileFormat: 'video/mp4',
            fileSrc: file.path
        })

        const resp = await Files.create({
            account_id: 1,
            name: '',
            path: '',
            public: '',
            system_file_type_id: 1,
            system_file_bucket_id: 1
        });
        
        return res.status(200).json({
            status: true,
            results: {
                resp
            }
        });
    } catch (error) {
        return res.status(400).json({ status: false, messaje: error.message });
    }
};

module.exports = {
    Create,
    GetAll,
    GetById
};
