package com.project.HamoBack.myServer.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class MyServer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique=true, nullable = false)
    private String username;

    private String servername;

    private long user_id;
}
