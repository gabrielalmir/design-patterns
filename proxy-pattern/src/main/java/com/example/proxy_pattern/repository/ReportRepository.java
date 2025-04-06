package com.example.proxy_pattern.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.proxy_pattern.entity.Report;

public interface ReportRepository extends JpaRepository<Report, Long> {}
