import {ServicioVehiculos} from "../services/ServicioVehiculo.js"
import {ServicioCelda} from "../services/ServicioCelda.js"

export class ControladorVehiculo{

    constructor(){}

    async buscarvehiculos(request,response){

        let servicioVehiculos = new ServicioVehiculos()
        try {
            response.status(200).json({
                mensaje:'exito buscando los vehiculos',
                data: await servicioCelda.buscar()
            })
        } catch (error) {
            response.status(400).json({
            mensaje:'falla buscando los vehiculos'+error,
            data: await null
            })
        }
    }

    async buscarvehiculo(request,response){

        let servicioVehiculos = new ServicioVehiculos()
        try {
            response.status(200).json({
                mensaje:'exito buscando el vehiculo',
                data: await servicioVehiculos.buscar()
            })
        } catch (error) {
            response.status(400).json({
            mensaje:'falla buscando el vehiculo'+error,
            data: await null
            })
        }
    }

    async editarVehiculo(request,response){
        let servicioVehiculo = new ServicioVehiculos()
        let servicioCelda = new ServicioCelda()
        try {
            let id = request.params.id
            let datosPeticion = request.body

            //obtener los datos de la celda
            let delda = await servicioCelda.buscarPorId(datos.id_celda)
            //capturar la info del valor del minuto de la celda
            let tarifa=celda.tarifa
            //captura fecha salida
            let fechaSalida=new Date()
            //obtener la fecha de entradadel vehiculo
            let vehiculo = await servicioVehiculo.buscarPorId(id)
            let fechaIn = vehiculo.fecha_ingreso
            //restar las dos fechas y obtener la diferencia de tiempo por minuto
            let diferencia = fechaSalida.getTime()-fechaIn.getTime()
            diferenciaSegundos = diferencia/1000
            let diferenciaMinutos= Math.round(diferencia/60)
            datos.minutos=diferenciaMinutos
            // let diferenciaSegundos=diferencia/1000
            // let diferenciaMinutos=diferenciaSegundos/60

        let costo=diferenciaMinutos*tarifa

            await servicioVehiculo.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:'exito en la editando el vehiculo',
                data: await servicioVehiculo.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo editando el vehiculo'+error,
                data: null
            })
        }
    }

    async agregarVehiculo(request,response){
        let servicioVehiculo = new ServicioCelda()
        let servicioCelda = new ServicioCelda()
        try {
            let datos = request.body
            //obtener los datos de la celda dondese ingresara el vehiculo
            let celda=await servicioCelda.buscarPorId(datos.id_celda)
            //preguntar si la celda esta disponible
            if (celda.estado){//si esta disponible
                //capturo lo fecha de entrada
                let fechaIn=new Date()
                //agregar la fecha de entrada a los datos del body
                datos.fecha_ingreso=fechaIn
            }

            await servicioVehiculo.editar(datos)
            response.status(200).json({
                mensaje:'exito en la insertando el vehiculo',
                data: await servicioVehiculo.buscarPorId(id)
            })
        } catch (error) {
            response.status(400).json({
                mensaje:'fallo insertando el vehiculo'+error,
                data: await servicioCelda.buscarPorId(id)
            })
        }
    }
}