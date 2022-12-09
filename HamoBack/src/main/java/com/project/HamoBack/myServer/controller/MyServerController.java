package com.project.HamoBack.myServer.controller;

import com.project.HamoBack.myServer.domain.MyServer;
import com.project.HamoBack.myServer.service.MyServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/list/{id}")
    @ResponseBody
    public List<MyServer> list(@PathVariable("id") Long userId){
        return myServerService.getList(userId);
    }
}
