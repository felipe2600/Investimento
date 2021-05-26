package com.bald.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bald.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{

}
