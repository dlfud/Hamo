package com.project.HamoBack.myServer.service;

import com.project.HamoBack.myServer.dao.MyServerRepository;
import com.project.HamoBack.myServer.domain.MyServer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MyServerService {
    private final MyServerRepository myServerRepository;

    public void create(MyServer myServer){
        myServerRepository.save(myServer);
    }

    public List<MyServer> getList(Long userId) {
        return this.myServerRepository.findAllByUserId(userId);
//        return this.myServerRepository.findById(userId);
    }
}
