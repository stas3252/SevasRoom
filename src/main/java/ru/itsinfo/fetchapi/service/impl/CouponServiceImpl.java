package ru.itsinfo.fetchapi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itsinfo.fetchapi.model.Coupon;
import ru.itsinfo.fetchapi.repository.CouponRepo;
import ru.itsinfo.fetchapi.service.CouponService;

import javax.transaction.Transactional;

@Service
@Transactional
public class CouponServiceImpl implements CouponService {
    private final CouponRepo couponRepo;
    @Autowired
    public CouponServiceImpl(CouponRepo couponRepo) {
        this.couponRepo = couponRepo;
    }
    @Override
    public Coupon save(Coupon coupon) {
        return couponRepo.save(coupon);
    }
}
