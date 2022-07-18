import {modeloAdministrador} from '../models/modeloAdministrador.js'

export class ServicioAdministrador{
    constructor(){}

    async buscar(){
        let administradores = await modeloAdministrador.find()
        return (administradores)
    }

    async buscarPorId(idAdmin){
        let Administrador = await modeloAdministrador.findById(idAdmin)
        return(Administrador)
    }

    async editar(idAdmin,datoAdmin){
        return await modeloAdministrador.findByIdAndUpdate(idAdmin,datoAdmin)
    }

    async ingresar(infoAdmin){
        let registrarAdministrador = new modeloAdministrador(infoAdmin) 
        return await registrarAdministrador.save()
    }
}