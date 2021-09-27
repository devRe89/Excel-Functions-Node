

const validate_file = (req, res, next) => {

    if( req.files === null){
        return res.status(400).json({
            msg: "El campo excel es requerido",
        });
    }

    const extensions = ['xlsx', 'xlt'];
    const { excel } = req.files;

    const excelExtension = excel.name.split('.')[1];

    if(!extensions.includes(excelExtension)){
        return res.status(400).json({
            msg: "La extensión del excel no es valida",
        });
    }
    
    next();
}

module.exports = {
    validate_file
}