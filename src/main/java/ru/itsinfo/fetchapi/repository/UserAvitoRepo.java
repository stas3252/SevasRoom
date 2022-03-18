package ru.itsinfo.fetchapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itsinfo.fetchapi.model.UserAvito;

public interface UserAvitoRepo extends JpaRepository<UserAvito, Long> {
}
