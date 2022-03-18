package ru.itsinfo.fetchapi.model;

import javax.persistence.*;
import java.util.Collections;

@Entity
@Table(name = "table_user_word_info")
public class UserWordInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id")
    private long userId;

    @Column(name = "word_id")
    private long wordId;

    @Column(name = "status_word")
    private String statusWord;

    public UserWordInfo(){}

    public UserWordInfo(long userId, long wordId, String statusWord) {
        this.userId = userId;
        this.wordId = wordId;
        this.statusWord = statusWord;
    }

    public long getUserId() {return userId;}
    public void setUserId(long userId) {this.userId = userId;}

    public long getWordId() {return wordId;}
    public void setWordId(long wordId) {this.wordId = wordId;}

    public String getStatusWord() {return statusWord;}
    public void setStatusWord(String statusWord) {this.statusWord = statusWord;}

    public long getId() {return id;}
    public void setId(long id) {this.id = id;}

    public String toString() {
        return String.format("User [id = %d; userId = %d; wordId = %d; statusWord = %s;]",
                this.getId(), userId, wordId, statusWord);
    }
}
