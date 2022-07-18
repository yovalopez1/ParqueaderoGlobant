import {modeloVehiculo} from '../models/modeloVehiculo.js'

export class ServicioVehiculos{
    constructor(){}

    async buscar(){
        let vehiculos = await modeloVehiculo.find()
        return (vehiculos)
    }

    async buscarPorId(idVehiculo){
        let vehiculo = await modeloVehiculo.findById(idVehiculo)
        return(vehiculo)
    }

    async editar(idVehiculo,datoVehiculo){
        return await modeloVehiculo.findByIdAndUpdate(idVehiculo,datoVehiculo)
    }

    async ingresar(infoVehiculo){
        let registrarVehiculo = new modeloVehiculo(infoVehiculo) 
        return await registrarVehiculo.save()
    }
}