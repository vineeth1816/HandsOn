package com.cognizant.Model;

import java.util.ArrayList;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
@Service
public class EmployeeDao {
	ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("Employee.xml");
	
	
	
	public ArrayList<Employee> getAllEmployees(){
		ArrayList<Employee> empList=(ArrayList<Employee>)context.getBean("employeeList");
		return empList;
	}
}
