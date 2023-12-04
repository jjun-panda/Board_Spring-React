package com.junc.boardback.common;

public class ResponseCode {
    
    // 200
	public static String SUCCESS = "SU"; // 성공

    // 400
	public static String VALIDATION_FAILED = "VF"; // 유효성 검증 실패
	public static String DUPLICATE_EMAIL = "DE"; // 중복된 이메일
	public static String DUPLICATE_TEL_NUMBER =  "DI"; // 중복된 전화번호
	public static String DUPLICATE_NICKNAME = "DN"; // 중복된 닉네임
	public static String NOT_EXISTED_USER = "NU"; // 존재하지 않는 유저
	public static  String NOT_EXISTED_BOARD = "NB"; // 존재하지 않는 게시물

    // 401
	public static String SIGN_IN_FAIL = "SF"; // 로그인 실패
	public static String Authorization_FAIL = "AF"; // 인증 실패

    // 403
	public static String NO_PERMISSION = "NP"; //권한 없음 

    // 500
    public static String DATABASE_ERROR = "DBE"; // 데이터베이스 에러
}
