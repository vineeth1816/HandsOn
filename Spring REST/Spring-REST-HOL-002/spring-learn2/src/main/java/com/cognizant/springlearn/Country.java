package com.cognizant.springlearn;

public class Country {
private String code;
private String name;
@Override
public String toString() {
	return "Country [code=" + code + ", name=" + name + "]";
}
public String getCode() {
	return code;
}
public void setCode(String code) {
	this.code = code;
}
public Country() {
	System.out.println("Inside Country Constructor.");
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
}
