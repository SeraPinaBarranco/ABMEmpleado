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

  eliminarEmpleado(index:number){
    this.listEmpleado.splice(index,1);
  }

  agregarEmpleado(empleado:Empleado){
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index:number){
    return this.listEmpleado[index];
  }

  editEmpleado(empleado:Empleado, idEmpleado:number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;


  }
}
