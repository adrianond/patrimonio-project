package com.algaworks.patrimonio.resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.patrimonio.model.Customer;


@RestController
@CrossOrigin("${origem-permitida}")
public class XMLRestResource {

	
	//@GetMapping("/customer")
	@RequestMapping(value = "/customer", method = RequestMethod.GET, produces = "application/xml")
	public Customer getCustomer() {
		return new Customer("Peter", "Smith", 30);
	}

	@PostMapping("/customer")
	public String postCustomer(@RequestBody Customer customer) {
		System.out.println(customer);
		return "Done";
	}

}
