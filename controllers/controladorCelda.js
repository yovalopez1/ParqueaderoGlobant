import { ServicioCelda } from "../services/ServicioCelda.js";

export class ControladorCelda{
    constructor(){}

    async buscarCeldas(request,response){

        let servicioCelda = new ServicioCelda()
        try {
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioCelda.buscar()
            })
        } catch (error) {
            response.status(400).json({
            mensaje:'falla en la consulta'+error,
            data: await null
            })
        }
    }

    async buscarCelda(request,response){
        
        let servicioCelda = new ServicioCelda()
        try {
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioCelda.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo en la consulta'+error,
                data: null
            })
        }
    }

    async editarCelda(request,response){
        let servicioCelda = new ServicioCelda()
        
        try {
            let id = request.params.id
            let datosPeticion = request.body
            await servicioCelda.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:'exito en la editando la celda',
                data: await servicioCelda.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo editando la celda'+error,
                data: null
            })
        }
    }

    async agregarCelda(request,response){
        let servicioCelda = new ServicioCelda()
        try {
            let datos = request.body
            await servicioCelda.editar(datos)
            response.status(200).json({
                mensaje:'exito en la insertando la celda',
                data: await servicioCelda.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo insertando la celda'+error,
                data: await servicioCelda.buscarPorId(id)
            })
        }
    }
}