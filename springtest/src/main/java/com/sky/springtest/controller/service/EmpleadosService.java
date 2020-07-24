package com.sky.springtest.controller.service;

import com.sky.springtest.data.repository.EmpleadosRepository;
import com.sky.springtest.data.model.Empleados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmpleadosService {

    @Autowired
    private EmpleadosRepository empleadosRepository;

    public List<Empleados> getEmpleados() {
        List<Empleados> empleados = new ArrayList<>();
        empleadosRepository.findAll().forEach(empleados::add);
        return empleados;
    }

    public Empleados getEmpleado(String id) {
        return empleadosRepository.findById(id).orElse(null);
    }

    public Empleados add(Empleados empleados) {
        return empleadosRepository.save(empleados);
    }

    public Empleados update(String id, Empleados empleados) {
        return empleadosRepository.save(empleados);
    }

    public boolean remove(String id) {
        empleadosRepository.deleteById(id);

        return true;
    }
}
