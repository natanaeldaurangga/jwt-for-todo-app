package com.nael.newjwtreact.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {
	
	@GetMapping("/allUser")
	public ResponseEntity<String> allUser(){
		return ResponseEntity.ok("All User");
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MODERATOR')")
	public ResponseEntity<String> user(){
		return ResponseEntity.ok("user");
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
	public ResponseEntity<String> admin(){
		return ResponseEntity.ok("admin");
	}
	
	@GetMapping("/moderator")
	@PreAuthorize("hasRole('MODERATOR')")
	public ResponseEntity<String> moderator(){
		return ResponseEntity.ok("moderator");
	}
	
	
	
	

}
