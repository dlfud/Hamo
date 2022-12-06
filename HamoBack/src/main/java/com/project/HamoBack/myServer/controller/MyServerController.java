package com.project.HamoBack.myServer.controller;

import com.project.HamoBack.myServer.service.MyServerService;
import com.project.HamoBack.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/myServer")
public class MyServerController {
    private final MyServerService myServerService;

    @PostMapping("/create")
    public void create(@RequestBody User user){
        System.out.println(user);

    }
}
