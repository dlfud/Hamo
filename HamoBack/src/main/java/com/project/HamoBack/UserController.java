package com.project.HamoBack;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @PostMapping("/users")
    public User user() {
        System.out.println("UserController");
        User user = new User(1, "홍길동", "ma123", "1234");

        return user;
    }
}
