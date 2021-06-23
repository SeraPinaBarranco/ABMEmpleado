import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles:any[] = ["Soltero/a", "Casado/a","Divorciado/a", "Viudo/a"];
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService, private route: Router, private snackBar: MatSnackBar) { 
    this.myForm = this.fb.group({
      nombreCompleto:[''],
      correo:[''],
      fechaIngreso:[''],
      telefono:[''],
      estadoCivil:[''],
      sexo:['']
    });
  }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    const empleado: Empleado ={
      nombreCompleto: this.myForm.get('nombreCompleto').value,
      correo: this.myForm.get('correo').value,
      telefono: this.myForm.get('telefono').value,
      fechaIngreso: this.myForm.get('fechaIngreso').value,
      estadoCivil:this.myForm.get('estadoCivil').value,
      sexo:this.myForm.get('sexo').value
    };

    this.empleadoService.agregarEmpleado(empleado);

    this.snackBar.open("Elemento creado!!","",{duration:2000});
    
    this.route.navigate(['/']);

  }
}
