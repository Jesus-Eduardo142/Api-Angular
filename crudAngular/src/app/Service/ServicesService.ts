import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../Modelo/Personas';

@Injectable()
export class ServicesService {
  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8089/empleados';
  getPersonas() {
    return this.http.get<Empleados[]>(this.Url);
  }

  createPersona(empleados:Empleados){
    return this.http.post<Empleados>(this.Url,empleados);
  }

  getPersonaId(id:number) {
    return this.http.get<Empleados>(this.Url + "/" + id);
  }

  updatePersona(empleados:Empleados) {
    return this.http.put<Empleados>(this.Url + "/" + empleados.id, empleados);
  }

  deletePersona(empleados:Empleados) {
    return this.http.delete<Empleados>(this.Url + "/" + empleados.id);
  }
}
