package ru.itsinfo.fetchapi.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import ru.itsinfo.fetchapi.model.UserWordInfo;

import java.util.List;

public interface UserWordInfoRepository extends JpaRepository<UserWordInfo, Long>{
    @Query(value = "select ws from UserWordInfo ws where ws.userId = :id")
    List<UserWordInfo> findWordsByUserId(@Param("id") Long id);
}
