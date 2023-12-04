package com.junc.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junc.boardback.entity.SearchLogEntity;

@Repository
public interface SearchLogRespository extends JpaRepository<SearchLogEntity, Integer> {
	
}

