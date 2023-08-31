package com.junc.boardback.provider;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtProvider {
    
    @Value("${secret-key}")
    private String secretKey;

    public String create(String email) {
        Date expitrdDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));
        
        SecretKey key = Keys.hmacShaKeyFor(secretKey.getBytes());

        String jwt = Jwts.builder()
            .signWith(key, SignatureAlgorithm.HS256)
            .setSubject(email).setIssuedAt(new Date()).setExpiration(expitrdDate)
            .compact();

        return jwt;
    }

    public String validate(String jwt) {
        Claims claims = null;
        try {
            SecretKey key = Keys.hmacShaKeyFor(secretKey.getBytes());
            claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwt)
                .getBody();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return claims.getSubject();
    }
}
