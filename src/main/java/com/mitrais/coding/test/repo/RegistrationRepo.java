package com.mitrais.coding.test.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mitrais.coding.test.model.Register;

public interface RegistrationRepo extends JpaRepository<Register, Integer> {

	
}
