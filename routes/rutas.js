import express from 'express'

import {ControladorAdministrador} from '../controllers/controladorAdministrador.js'
import {ControladorCelda} from '../controllers/controladorCelda.js'
import {ControladorVehiculo} from '../controllers/ControladorVehiculo.js'

export let rutas=express.Router()

//Rutas administradores

let controladorAdministrador = new ControladorAdministrador()
let controladorCelda = new ControladorCelda()
let controladorVehiculo = new ControladorVehiculo()


rutas.get('/api/v1/parqueadero/admins/', controladorAdministrador.buscarAdministradores)
rutas.get('/api/v1/parqueadero/admin/:id/parking', controladorAdministrador.buscarAdministrador)//Jhon
rutas.post('/api/v1/parqueadero/admin/',controladorAdministrador.agregarAdministrador)
rutas.put('/api/v1/parqueadero/admin/:id/', controladorAdministrador.editarAdministrador)


//Rutas celdas

rutas.get('/api/v1/parqueadero/celdas/', controladorCelda.buscarCeldas)
rutas.get('/api/v1/parqueadero/celda/:id/', controladorCelda.buscarCelda)
rutas.post('/api/v1/parqueadero/celda/',controladorCelda.agregarCelda)
rutas.put('/api/v1/parqueadero/celda/:id/', controladorCelda.editarCelda)

//Rutas vehiculos

rutas.get('/api/v1/parqueadero/vehiculos/', controladorVehiculo.buscarvehiculos)
rutas.get('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.buscarvehiculo)
rutas.post('/api/v1/parqueadero/vehiculo/',controladorVehiculo.agregarVehiculo)
rutas.put('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.editarVehiculo)

