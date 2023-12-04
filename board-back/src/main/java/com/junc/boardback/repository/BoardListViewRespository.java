package com.junc.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junc.boardback.entity.BoardListViewEntity;

@Repository
public interface BoardListViewRespository extends JpaRepository<BoardListViewEntity, Integer> {
	
}

