package com.cognizant.springlearn;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.core.ApplicationContext;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		SpringLearnApplication.displayCountry();
		SpringLearnApplication.displayCountries();
		
	}

	public static void displayCountry() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

		Country country = (Country) context.getBean("country", Country.class);
		Country anotherCountry = context.getBean("country", Country.class);
		System.out.println(country);
	}
	
	public static void displayCountries() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		List<Country> cList=(List<Country>)context.getBean("countryList",ArrayList.class);
		
		for(Country c :cList){
			System.out.println(c);
		}
	}

}
