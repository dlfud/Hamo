package com.project.HamoBack.myServer.dao;


import com.project.HamoBack.myServer.domain.MyServer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyServerRepository extends JpaRepository<MyServer, Long> {
}
