const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) => {
    try {

        let producto;

        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {

        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async (req, res) => {
    try {

        const { servicio, cantidad, fecha_estimada, concepto, area_solicitante, centro_costos, especificaciones, servicio_recurrente } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ message: 'No existe el producto' })
        }

        producto.servicio = servicio;
        producto.cantidad = cantidad;
        producto.fecha_estimada = fecha_estimada;
        producto.concepto = concepto;
        producto.area_solicitante = area_solicitante;
        producto.centro_costos = centro_costos;
        producto.especificaciones = especificaciones;
        producto.servicio_recurrente = servicio_recurrente;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ message: 'No existe el producto' })
        }

        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ message: 'No existe el producto' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ massage: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}