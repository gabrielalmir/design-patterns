package com.example.proxy_pattern.service;

import com.example.proxy_pattern.dto.ReportGeneratedResponseDto;
import com.example.proxy_pattern.entity.Report;

public interface ReportGeneratorInterface {
     ReportGeneratedResponseDto generate(Report report) throws InterruptedException;
}
