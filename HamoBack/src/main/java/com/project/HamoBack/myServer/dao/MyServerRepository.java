package com.project.HamoBack.myServer.dao;


import com.project.HamoBack.myServer.domain.MyServer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MyServerRepository extends JpaRepository<MyServer, Long> {
    List<MyServer> findAllByUserId(Long userId);
}
