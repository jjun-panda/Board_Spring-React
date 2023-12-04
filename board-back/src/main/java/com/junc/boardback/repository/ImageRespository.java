package com.junc.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junc.boardback.entity.ImageEntity;

@Repository
public interface ImageRespository extends JpaRepository<ImageEntity, Integer> {
	
}

