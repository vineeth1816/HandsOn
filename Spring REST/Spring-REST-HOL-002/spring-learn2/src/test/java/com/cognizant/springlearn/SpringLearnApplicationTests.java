package com.cognizant.springlearn;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cognizant.springlearn.Controller.CountryController;

@SpringBootTest
class SpringLearnApplicationTests {
	
	@Autowired
	CountryController countryController;
	
	@Test
	public void contextLoads() {

	assertNotNull(countryController);

	}

}
