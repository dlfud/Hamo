package com.project.HamoBack.user.controller;

import com.project.HamoBack.myServer.service.MyServerService;
import com.project.HamoBack.user.dao.UserRepository;
import com.project.HamoBack.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequiredArgsConstructor
public class UserController {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;
    private final MyServerService myServerService;

//    @GetMapping("/home")
//    @ResponseBody
//    public String home() {
//        return "home";
//    }
//    @PostMapping("/token")
//    @ResponseBody
//    public String token() {
//        return "token";
//    }

    @PostMapping("api/v1/join")
    public String join(@RequestBody User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRoles("ROLE_USER");
        userRepository.save(user);
        return "회원가입 완료";
    }

    @GetMapping("/api/v1/user")
    public String user() {

        return "user";
    }

    @GetMapping("/api/v1/manager")
    public String manager() {

        return "manager";
    }

    @GetMapping("/api/v1/admin")
    public String admin() {
        return "admin";
    }

}
