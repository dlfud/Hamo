package com.project.HamoBack.user.controller;

import com.project.HamoBack.user.domain.User;
import com.project.HamoBack.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/api/v1/user/join")
    public String join(@RequestBody User user){
        userService.join(user);
        return "user";
    }

}
