import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Celda = new Schema({
    nombre:{
        type:Number,
        required:true
    },
    tarifa:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    },
    telefono:{
        type:String,
        required:false
    }
})

export const modeloCelda=mongoose.model('celdas',Celda)
