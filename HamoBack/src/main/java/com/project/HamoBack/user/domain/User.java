package com.project.HamoBack.user.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique=true, nullable = false)
    private String username;

    @Column(unique=true, nullable = false)
    private String email;

    private String password;
    private String roles;

    public List<String> getRoleList() {
        if(this.roles.length() > 0 ) {
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }

}


