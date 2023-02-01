package com.nael.newjwtreact.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nael.newjwtreact.dto.AuthenticationRequest;
import com.nael.newjwtreact.dto.AuthenticationResponse;
import com.nael.newjwtreact.dto.RegisterRequest;
import com.nael.newjwtreact.model.User;
import com.nael.newjwtreact.repository.RoleRepository;
import com.nael.newjwtreact.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

	private final PasswordEncoder passwordEncoder;
	
	private final UserRepository userRepository;
	
	private final RoleRepository roleRepository;
	
	private final JwtService jwtService;
	
	private final AuthenticationManager authenticationManager;
	
	public AuthenticationResponse register(RegisterRequest request) {
		log.info("passwordStatus : {}", request.getPassword() == null);
		User user = User.builder()
				.firstName(request.getFirstName())
				.lastName(request.getLastName())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.roles(roleRepository.findByNameIn(request.getRoles()))
				.build();
		userRepository.save(user);
		
		String jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}
	
	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
								request.getEmail(), request.getPassword()
							)
				);
		var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

		String jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}
	
//	public String 
}
