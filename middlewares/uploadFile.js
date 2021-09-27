const path = require('path');
const { v4: uuidv4 } = require('uuid');


const uploadFile = (files, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'], carpeta = '') => {
    return new Promise( (res, rej) => {
        if ( !files || Object.keys(files).length === 0 ){
           return rej("No hay archivos para subir al server");
        }
        const {excel} = files;

        const nuevoNombre = excel.name.split('.');

        const extension = nuevoNombre[ nuevoNombre.length - 1 ];

        if ( !extensionesValidas.includes( extension ) ){
            return rej('La extensión no es valida');
        }

        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', carpeta, nombreTemp);

        excel.mv( uploadPath, (err) => {
            if (err) {
                return rej(err);
            }
            res(uploadPath);
        });
    });
}

module.exports = {
    uploadFile
}