package com.nael.newjwtreact.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nael.newjwtreact.dto.TaskRequest;
import com.nael.newjwtreact.model.Todo;
import com.nael.newjwtreact.repository.TodoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {

	private final TodoRepository repository;
	
	public Todo addNewTask(TaskRequest dto) {
		var todo = new Todo();
		todo.setTask(dto.getTask());
		todo.setIsChecked(false);
		return repository.save(todo);
	}
	
	public Todo updateTask(String secureId, TaskRequest dto) {
		var todo = repository.findBySecureId(secureId).get();
		todo.setTask(dto.getTask());
		return repository.save(todo);
	}
	
	public Todo checkTask(String secureId) {
		var todo = repository.findBySecureId(secureId).get();
		todo.setIsChecked(true);
		return repository.save(todo);
	}
	
	public boolean deleteTask(String secureId) {
		var todoOpt = repository.findBySecureId(secureId);
		if(todoOpt.isEmpty()) return false;
		repository.delete(todoOpt.get());
		return true;
	}
	
	public List<Todo> getAllTodo() {
		return repository.findAll();
	}
	
}
