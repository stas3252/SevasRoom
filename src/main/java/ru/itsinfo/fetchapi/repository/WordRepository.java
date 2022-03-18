package ru.itsinfo.fetchapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itsinfo.fetchapi.model.Word;

public interface WordRepository extends JpaRepository<Word, Long> {

}
