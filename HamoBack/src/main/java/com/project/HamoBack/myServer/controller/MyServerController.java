package com.project.HamoBack.myServer.controller;

import com.project.HamoBack.myServer.domain.MyServer;
import com.project.HamoBack.myServer.service.MyServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/myServer")
public class MyServerController {
    private final MyServerService myServerService;

    @PostMapping("/create")
    @ResponseBody
    public String create(@RequestBody MyServer myServer){
        System.out.println(myServer);
        myServerService.create(myServer);
        return "success";
    }
}
