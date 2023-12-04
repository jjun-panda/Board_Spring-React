package com.junc.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junc.boardback.entity.UserEntity;

@Repository
public interface UserRespository extends JpaRepository<UserEntity, String> {
	
}

