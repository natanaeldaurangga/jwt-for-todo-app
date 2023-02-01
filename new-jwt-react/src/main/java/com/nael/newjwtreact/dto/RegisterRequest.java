package com.nael.newjwtreact.dto;

import java.util.HashSet;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterRequest {

	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;

	private Set<String> roles = new HashSet<>();
}
