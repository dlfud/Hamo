package com.project.HamoBack.user.dao;

import com.project.HamoBack.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
