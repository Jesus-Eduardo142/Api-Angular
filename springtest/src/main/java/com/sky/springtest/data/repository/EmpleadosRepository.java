package com.sky.springtest.data.repository;

import com.sky.springtest.data.model.Empleados;
import org.springframework.data.repository.CrudRepository;

public interface EmpleadosRepository extends CrudRepository<Empleados, String> {

}
