package com.nael.newjwtreact.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nael.newjwtreact.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long>  {

	Optional<Todo> findBySecureId(String secureId);
	
}
