package com.junc.boardback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junc.boardback.entity.FavoriteEntity;
import com.junc.boardback.entity.primaryKey.FavoritePk;

@Repository
public interface FavoriteRespository extends JpaRepository<FavoriteEntity, FavoritePk> {
	
}

