package com.cognizant.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.Model.Employee;
import com.cognizant.Model.EmployeeDao;
@RestController
public class EmployeeController {

	@Autowired
	EmployeeDao employeeDao;
	
	@GetMapping("/employees")
	public ArrayList<Employee> getAllEmployees(){
		return employeeDao.getAllEmployees();
	}
}
