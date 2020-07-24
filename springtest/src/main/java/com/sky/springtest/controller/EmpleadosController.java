package com.sky.springtest.controller;

import com.sky.springtest.controller.response.DeleteResponse;
import com.sky.springtest.controller.service.EmpleadosService;
import com.sky.springtest.data.model.Empleados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class EmpleadosController {

    @Autowired
    private EmpleadosService empleadosService;

    @GetMapping(value = "/empleados")
    public List<Empleados> getEmpleados() {
        return empleadosService.getEmpleados();
    }
    
    @GetMapping(path = {"/empleados/{id}"})
    public Empleados getEmpleado(@PathVariable String id) {
        return empleadosService.getEmpleado(id);
    }

    
    @PostMapping(path = {"/empleados"})
    public Empleados postEmpleado(@RequestBody Empleados empleados) {
        return empleadosService.add(empleados);
    } 
    
    @PutMapping(path = {"/empleados/{id}"})
    public Empleados putEmpleado(@PathVariable String id, @RequestBody Empleados empleados) {
        return empleadosService.update(id, empleados);
    }

    @DeleteMapping(path = {"/empleados/{id}"})
    public DeleteResponse deleteEmpleado(@PathVariable String id) {
        if (empleadosService.remove(id)) {
            return new DeleteResponse(1, "Deleted!");
        }

        return new DeleteResponse(0, "Not found!");
    }
}
