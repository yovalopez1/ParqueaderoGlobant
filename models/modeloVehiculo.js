import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Vehiculo = new Schema({
    placa:{
        type:String,
        required:true
    },
    fecha_ingreso:{
        type:String,
        required:false
    },
    fecha_salida:{
        type:String,
        required:false
    },
    id_celda:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:false
    },
    total_pago:{
        type:Number,
        required:false
    },
    minutos:{
        type:Number,
        required:false
    }
})

export const modeloVehiculo=mongoose.model('vehiculos',Vehiculo)
