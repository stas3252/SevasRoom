package ru.itsinfo.fetchapi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ru.itsinfo.fetchapi.model.Coupon;
import ru.itsinfo.fetchapi.model.UserWordInfo;

import java.util.List;

public interface CouponRepo extends CrudRepository<Coupon, Integer> {
}
