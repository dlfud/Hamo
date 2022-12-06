package com.project.HamoBack.myServer.service;

import com.project.HamoBack.myServer.dao.MyServerRepository;
import com.project.HamoBack.myServer.domain.MyServer;
import com.project.HamoBack.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyServerService {
    private final MyServerRepository myServerRepository;

    public void create(User user){
        MyServer myServer = new MyServer();
        myServer.setEmail(user.getEmail());
        myServer.setUsername(user.getUsername());
        myServerRepository.save(myServer);
    }
}
