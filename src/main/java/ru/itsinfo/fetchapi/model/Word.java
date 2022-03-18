package ru.itsinfo.fetchapi.model;

import javax.persistence.*;

@Entity
@Table(name = "table_words1")
public class Word {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String russianName;
    private String englishName;
    private String wordStatus = null;
    private int popular;

    public Word(){}

    public Word(String russianName, String englishName, int popular, String wordStatus) {
        this.russianName = russianName;
        this.englishName = englishName;
        this.popular = popular;
        this.wordStatus = wordStatus;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public int getPopular() {
        return popular;
    }
    public void setPopular(int popular) {
        this.popular = popular;
    }

    public String getRussianName() {
        return russianName;
    }
    public void setRussianName(String russianName) {
        this.russianName = russianName;
    }

    public String getEnglishName() {
        return englishName;
    }
    public void setEnglishName(String englishName) {
        this.englishName = englishName;
    }

    public String getWordStatus() {return wordStatus;}
    public void setWordStatus(String wordStatus) {this.wordStatus = wordStatus;}

    public String toString() {
        return String.format("Word [id = %d; russianName = %s; englishName = %s; popular = %d; wordStatus = %s]",
                this.getId(), russianName, englishName, popular, wordStatus);
    }
}
