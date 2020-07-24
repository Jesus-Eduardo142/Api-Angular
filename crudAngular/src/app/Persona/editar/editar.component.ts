import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/ServicesService';
import { Empleados } from 'src/app/Modelo/Personas';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  empleados:Empleados
  constructor(private router:Router, private service:ServicesService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.empleados=data;
    })

  }
  Actualizar(empleados:Empleados){
    this.service.updatePersona(empleados)
    .subscribe(data=>{
      this.empleados=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
