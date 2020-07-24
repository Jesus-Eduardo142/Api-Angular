import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/ServicesService';
import { Empleados } from 'src/app/Modelo/Personas';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  empleados:Empleados=new Empleados();
  constructor(private router:Router, private service:ServicesService) { }

  ngOnInit(){
  }

  Guardar(){
    this.service.createPersona(this.empleados)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
