package com.nael.newjwtreact.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nael.newjwtreact.model.User;
import com.nael.newjwtreact.repository.UserRepository;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
//@Service
public class AppUserDetailsService implements UserDetailsService {
	
	private final UserRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		String userName, password = null;
		
		List<GrantedAuthority> authorities = null;
		Optional<User> userOpt = repository.findByEmail(username);
		
		if(userOpt.isEmpty()) {
			throw new UsernameNotFoundException("Email is not registered");
		}
		// TOOO: Lanjut untuk user details
		return userOpt.get();
	}

}
