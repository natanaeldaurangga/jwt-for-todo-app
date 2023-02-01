package com.nael.newjwtreact.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nael.newjwtreact.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

	Set<Role> findByNameIn(Set<String> roles);

}
