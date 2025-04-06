package com.example.proxy_pattern.service;

import com.example.proxy_pattern.dto.ReportGeneratedResponseDto;

public class CacheEntry {
    private final ReportGeneratedResponseDto response;
    private final long timestamp;

    public CacheEntry(ReportGeneratedResponseDto response, long timestamp) {
        this.response = response;
        this.timestamp = timestamp;
    }

    public ReportGeneratedResponseDto getResponse() {
        return response;
    }

    public long getTimestamp() {
        return timestamp;
    }
}
