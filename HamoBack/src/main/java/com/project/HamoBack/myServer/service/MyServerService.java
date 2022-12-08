package com.project.HamoBack.myServer.service;

import com.project.HamoBack.myServer.dao.MyServerRepository;
import com.project.HamoBack.myServer.domain.MyServer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyServerService {
    private final MyServerRepository myServerRepository;

    public void create(MyServer myServer){
        myServerRepository.save(myServer);
    }
}
