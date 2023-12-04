package com.junc.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junc.boardback.entity.CommentEntity;

@Repository
public interface CommentRespository extends JpaRepository<CommentEntity, Integer> {
	
}

