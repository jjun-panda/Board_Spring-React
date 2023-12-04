package com.junc.boardback.common;

public class ResponseMessage {
    

    // 200
	public static String SUCCESS = "Success."; // 성공

    // 400
	public static String VALIDATION_FAILED = "Validation failed."; // 유효성 검증 실패
	public static String DUPLICATE_EMAIL = "Duplicate email."; // 중복된 이메일
	public static String DUPLICATE_TEL_NUMBER =  "Duplicate tel number."; // 중복된 전화번호
	public static String DUPLICATE_NICKNAME = "Duplicate nickname."; // 중복된 닉네임
	public static String NOT_EXISTED_USER = "This user does not exist."; // 존재하지 않는 유저
    public static String NOT_EXISTED_BOARD = "This board does not exist."; // 존재하지 않는 게시물

    // 401
    public static String SIGN_IN_FAIL = "Login information mismatch."; // 로그인 실패
    public static String Authorization_FAIL = "Authorization Failed."; // 인증 실패

    // 403
    public static String NO_PERMISSION = "Do not have permission."; //권한 없음 

    // 500
    public static String DATABASE_ERROR = "Database error."; // 데이터베이스 에러
}
