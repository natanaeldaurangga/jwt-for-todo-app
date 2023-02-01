package com.nael.newjwtreact.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nael.newjwtreact.dto.ResponseData;
import com.nael.newjwtreact.dto.TaskRequest;
import com.nael.newjwtreact.model.Todo;
import com.nael.newjwtreact.service.TodoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/todo")
@RequiredArgsConstructor
public class TodoController {

	private final TodoService service;
	// TODO: Lanjut untuk bikin front end nya
	@PostMapping("")
	@PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
	public ResponseEntity<ResponseData<?>> addNewTask(@RequestBody TaskRequest request){
		ResponseData<Todo> response = new ResponseData<>();
		var todo = service.addNewTask(request);
		response.setStatus(HttpStatus.CREATED.value());
		response.setMessage(List.of("success adding data"));
		response.setPayload(todo);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/{secureId}")
	@PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
	public ResponseEntity<ResponseData<?>> updateTask(@PathVariable String secureId, @RequestBody TaskRequest request) {
		ResponseData<Todo> response = new ResponseData();
		var todo = service.updateTask(secureId, request);
		response.setStatus(HttpStatus.CREATED.value());
		response.setMessage(List.of("success updating data"));
		response.setPayload(todo);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/check/{secureId}")
	@PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
	public ResponseEntity<ResponseData<?>> checkTask(@PathVariable String secureId){
		ResponseData<Todo> response = new ResponseData<>();
		var todo = service.checkTask(secureId);
		response.setStatus(HttpStatus.OK.value());
		response.setMessage(List.of("success checking task"));
		response.setPayload(todo);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/{secureId}")
	@PreAuthorize("hasAnyRole('ADMIN', 'MODERATOR')")
	public ResponseEntity<Void> deleteTask(@PathVariable String secureId){
		boolean success = service.deleteTask(secureId);
		if(success) return ResponseEntity.ok().build();
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("")
	@PreAuthorize("hasAnyRole('USER', 'ADMIN', 'MODERATOR')")
	public ResponseEntity<List<Todo>> getAllTasks(){
		return ResponseEntity.ok(service.getAllTodo());
	}
	

}
