package com.junc.boardback.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="board_list_view")
@Table(name="board_list_view")
public class BoardListViewEntity {
	
	@Id  @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int boardNumber;
	private String title;
	private String content;
	private String titleImage;
	private int viewcount;
	private int favoriteCount;
	private int commentCount;
	private String wirteDatetime;
	private String wirterEmail;
	private String wirterNickname;
	private String wirterProfileImage;
	
}
