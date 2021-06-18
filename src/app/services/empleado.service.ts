import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[]=[

    {nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono:2234234232,
    sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Ana Marquez', correo: 'lmarquez@gmail.com', telefono:56343466,
    sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casada'},
    {nombreCompleto: 'Lucas Vazquez', correo: 'lvazquez@gmail.com', telefono:657734232,
    sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Carolina Marin', correo: 'cmarin@gmail.com', telefono:9999934232,
    sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'}

  ];
  constructor() { }

  getEmpleados(){
    return this.listEmpleado.slice();
  }
}
