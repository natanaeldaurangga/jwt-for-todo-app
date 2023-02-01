package com.nael.newjwtreact.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nael.newjwtreact.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

}
