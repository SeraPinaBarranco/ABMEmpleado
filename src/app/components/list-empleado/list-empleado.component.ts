import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import {Subject} from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';


@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],

})
export class ListEmpleadoComponent implements OnInit {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo','telefono','acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado: Empleado[] ;
  
  @ViewChild(MatSort, {static:true}) sort!: MatSort;


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private empleadoService : EmpleadoService) {
    this.listEmpleado = this.empleadoService.getEmpleados(); 
  }

  ngOnInit(): void {
    this.cargarEmpleados();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(){
    this.listEmpleado = this.empleadoService.getEmpleados();
    console.log(this.listEmpleado);
    this.dataSource = new MatTableDataSource<Empleado>();
  }
}


