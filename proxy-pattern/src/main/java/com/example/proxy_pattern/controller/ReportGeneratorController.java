package com.example.proxy_pattern.controller;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.proxy_pattern.dto.ReportGeneratedResponseDto;
import com.example.proxy_pattern.entity.Report;
import com.example.proxy_pattern.repository.ReportRepository;
import com.example.proxy_pattern.service.ReportGeneratorInterface;


@RestController
@RequestMapping("/reports")
public class ReportGeneratorController {
    private final ReportRepository reportRepository;
    private final ReportGeneratorInterface reportGeneratorService;

    public ReportGeneratorController(
        ReportRepository reportRepository,
        @Qualifier("reportGeneratorProxy")
        ReportGeneratorInterface reportGenerator
    ) {
        this.reportRepository = reportRepository;
        this.reportGeneratorService = reportGenerator;
    }

    @PostMapping
    public ResponseEntity<Report> createReport() {
        // Just example code, don't add business logic to your controller
        var createdReport = this.reportRepository.save(new Report());
        return ResponseEntity.status(201).body(createdReport);
    }

    @GetMapping("{id}/generate")
    public ResponseEntity<ReportGeneratedResponseDto> generateReport(@PathVariable("id") Long id) {
        var report = this.reportRepository.findById(id);

        if (report.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        try  {
            var reportData = this.reportGeneratorService.generate(report.get());
            return ResponseEntity.ok(reportData);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return ResponseEntity.internalServerError().build();
        }
    }
}
