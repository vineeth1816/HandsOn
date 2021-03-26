package com.cognizant.Model;

import java.util.ArrayList;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class DepartmentDao {
	
	public ArrayList<Department> getAllDepartments(){
		ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("Department.xml");
		ArrayList<Department> depList=(ArrayList<Department>) context.getBean("departmentList");
		return depList;
	}

}
