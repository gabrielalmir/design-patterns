package com.example.proxy_pattern.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.proxy_pattern.dto.ReportGeneratedResponseDto;
import com.example.proxy_pattern.entity.Report;

@Service()
public class ReportGeneratorProxy implements ReportGeneratorInterface {
    private final ReportGeneratorService reportGeneratorService;
    private Map<Long, CacheEntry> cache = new HashMap<>();
    private static final long CACHE_LIFETIME = 5 * 60 * 1000L;

    public ReportGeneratorProxy(ReportGeneratorService reportGeneratorService) {
        this.reportGeneratorService = reportGeneratorService;
    }

    @Override
    public ReportGeneratedResponseDto generate(Report report) throws InterruptedException {
        if (cache.containsKey(report.getId())) {
            var entry = cache.get(report.getId());

            if (System.currentTimeMillis() - entry.getTimestamp() < CACHE_LIFETIME) {
                return entry.getResponse();
            }

            cache.remove(report.getId());
        }

        var reportData = this.reportGeneratorService.generate(report);
        cache.put(report.getId(), new CacheEntry(reportData, System.currentTimeMillis()));

        return reportData;
    }
}
