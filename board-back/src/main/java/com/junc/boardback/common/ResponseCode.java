package com.junc.boardback.common;

public class ResponseCode {
    
    // 200
    String SUCCESS = "SU"; // 성공

    // 400
    String VALIDATION_FAILED = "VF"; // 유효성 검증 실패
    String DUPLICATE = "DE"; // 중복된 이메일
    String DUPLICATE_TEL_NUMBER =  "DI"; // 중복된 전화번호
    String DUPLICATE_NICKNAME = "DN"; // 중복된 닉네임
    String NOT_EXISTED_USER = "NU"; // 존재하지 않는 유저
    String NOT_EXISTED_BOARD = "NB"; // 존재하지 않는 게시물

    // 401
    String SIGN_IN_FAIL = "SF"; // 로그인 실패
    String Authorization_FAIL = "AF"; // 인증 실패

    // 403
    String NO_PERMISSION = "NP"; //권한 없음 

    // 500
    public static String DATABASE_ERROR = "DBE"; // 데이터베이스 에러
}
