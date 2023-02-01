package com.nael.newjwtreact.dto;

import java.util.List;

import lombok.Data;

@Data
public class ResponseData<T> {

	private Integer status;
	
	private List<String> message;
	
	private T payload;
	
}
