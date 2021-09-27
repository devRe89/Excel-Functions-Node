const xlsx = require('node-xlsx').default;
const {uploadFile} = require('../middlewares/uploadFile');
const {cleanArrayEmptys} = require('../middlewares/untilsArrays');


exports.recorreExcel = async (req, res) => {

    const dirExcel = await uploadFile(req.files, ['xlsx', 'xlt']);
    const [workSheetsFromFile] = xlsx.parse(dirExcel);
    const dataExcel = workSheetsFromFile.data;
    const dataClean = cleanArrayEmptys(dataExcel);

    return res.json({
        msg: dataExcel.length,
    });
}