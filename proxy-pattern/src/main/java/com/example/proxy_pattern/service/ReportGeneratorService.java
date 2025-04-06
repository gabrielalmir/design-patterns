package com.example.proxy_pattern.service;

import org.springframework.stereotype.Service;

import com.example.proxy_pattern.dto.ReportGeneratedResponseDto;
import com.example.proxy_pattern.entity.Report;

@Service
public class ReportGeneratorService implements ReportGeneratorInterface {
    public ReportGeneratedResponseDto generate(Report report) throws InterruptedException {
        Thread.sleep(5_000);
        return new ReportGeneratedResponseDto(report.getId());
    }
}
