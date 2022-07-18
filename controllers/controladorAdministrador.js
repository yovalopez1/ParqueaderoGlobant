import { ServicioAdministrador } from "../services/ServicioAdministrador.js";

export class ControladorAdministrador{
    constructor(){}

    async buscarAdministradores(request,response){

        let servicioAdministrador = new ServicioAdministrador()
        try {
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioAdministrador.buscar()
            })
        } catch (error) {
            response.status(400).json({
            mensaje:'falla en la consulta'+error,
            data: await null
            })
        }
    }

    async buscarAdministrador(request,response){
        
        let servicioAdministrador = new ServicioAdministrador()
        try {
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioAdministrador.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo en la consulta'+error,
                data: null
            })
        }
    }

    async editarAdministrador(request,response){
        let servicioAdministrador = new ServicioAdministrador()

        try {
            let id = request.params.id
            let datosPeticion = request.body
            await servicioCelda.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:'exito en la editando la celda',
                data: await servicioAdministrador.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo editando la celda'+error,
                data: null
            })
        }
    }

    async agregarAdministrador(request,response){
        let servicioAdministrador = new ServicioAdministrador()
        try {
            let datos = request.body
            await servicioAdministrador.editar(datos)
            response.status(200).json({
                mensaje:'exito en la insertando el administrador',
                data: await servicioAdministrador.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo insertando la celda'+error,
                data: await servicioCelda.buscarPorId(id)
            })
        }
    }
}