const moongose = require('mongoose');

const ProductoSchema = moongose.Schema({

    // Variables del FrontEnd
    
    servicio: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
    fecha_estimada: {
        type: Date,
        require: true
    },
    concepto: {
        type: String,
        require: true
    },
    area_solicitante: {
        type: String,
        require: true
    },
    centro_costos: {
        type: Number,
        require: true
    },
    especificaciones: {
        type: String,
        require: true
    },
    servicio_recurrente: {
        type: String,
        require: true
    }
});

module.exports = moongose.model('Producto', ProductoSchema);