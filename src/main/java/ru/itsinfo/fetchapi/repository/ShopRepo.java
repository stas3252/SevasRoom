package ru.itsinfo.fetchapi.repository;

import org.springframework.data.repository.CrudRepository;
import ru.itsinfo.fetchapi.model.Shop;

public interface ShopRepo extends CrudRepository<Shop, Long> {
}
