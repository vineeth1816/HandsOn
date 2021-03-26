package com.cognizant.springlearn.Controller;


import java.util.List;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.CountryNotFoundException;

@RestController
public class CountryController {
	@RequestMapping(value="/hello",method=RequestMethod.GET)
	public String sayHello() {
		return "Hello World!!";
	}
	
	@RequestMapping(value="/country",method=RequestMethod.GET)
	public Country getCountry() {
		ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("Country.xml");
		Country c=(Country)context.getBean("country");
		return c;
	}
	
	@RequestMapping(value="/countries",method=RequestMethod.GET)
	public List<Country> getAllCountries() {
		ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("Country.xml");
		List<Country> c=(List<Country>)context.getBean("countryList");
		return c;
	}
	
	@RequestMapping(value="/countries/{code}",method=RequestMethod.GET)
	public Country getcountry(@PathVariable String code) throws CountryNotFoundException {
		ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("Country.xml");
		List<Country> c=(List<Country>)context.getBean("countryList");
		
		for(Country country:c) {
			if(country.getCode().equalsIgnoreCase(code))
				return country;
		}
		throw new CountryNotFoundException();
		
	}
}
