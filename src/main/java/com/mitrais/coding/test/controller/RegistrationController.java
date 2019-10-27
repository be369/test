package com.mitrais.coding.test.controller;

import javax.imageio.spi.RegisterableService;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mitrais.coding.test.model.Register;
import com.mitrais.coding.test.service.RegistrationService;

@RestController
@RequestMapping("/register")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationServiceImpl;
	
    @RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<String> register(@Valid @RequestBody Register register, BindingResult bindingResult, HttpServletRequest req,
                               HttpServletResponse res) {
		boolean status = true;
		try {
			/*registrationServiceImpl.createUser(register);*/
		} catch (Exception e) {
			status = false;
			// TODO: handle exception
		}
        if (status) {
        	return ResponseEntity.status(HttpStatus.OK).body("{\"status\":\"ok\"}");
        } else {
            return ResponseEntity.badRequest().body("{\"status\":\"no\"}");
        }
    }
}
