package com.mitrais.coding.test.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mitrais.coding.test.model.Register;
import com.mitrais.coding.test.repo.RegistrationRepo;
import com.mitrais.coding.test.service.RegistrationService;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	RegistrationRepo registrationRepo;

	@Override
	public void createUser(Register register) {
		registrationRepo.saveAndFlush(register);
	}
	
}
