package com.cognizant.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.Model.Department;
import com.cognizant.Model.DepartmentDao;

@RestController
public class DepartmentController {
	@Autowired
	DepartmentDao departmentDao;
	
	
	@GetMapping("/departments")
	public ArrayList<Department> getAllDepartments(){
		return departmentDao.getAllDepartments();
	}
}
