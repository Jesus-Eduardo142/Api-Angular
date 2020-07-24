import { Component, OnInit } from '@angular/core';
import{ServicesService}from '../../Service/ServicesService'
import { Router } from '@angular/router';
import { Empleados } from 'src/app/Modelo/Personas';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  emlpeados:Empleados[];

  constructor(private service:ServicesService, private router: Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.emlpeados = data;
      });
  }
  Editar(emlpeados:Empleados):void{
    localStorage.setItem("id",emlpeados.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(emlpeados:Empleados){
    this.service.deletePersona(emlpeados)
    .subscribe(data=>{
      this.emlpeados=this.emlpeados.filter(p=>p!==emlpeados);
      //alert("Usuario eliminado...");
    })
  }
}
