import { Report } from '../models/Report';
import { ReportGeneratedResponseDto } from '../dtos/ReportGeneratedResponseDto';
import { ReportGeneratorInterface } from './ReportGeneratorInterface';
import { ReportGeneratorService } from './ReportGeneratorService';
import { CacheEntry } from './CacheEntry';

/**
 * Proxy for the report generator service that caches results.
 */
export class ReportGeneratorProxy implements ReportGeneratorInterface {
  private cache: Map<number, CacheEntry> = new Map();
  private static readonly CACHE_LIFETIME = 5 * 60 * 1000; // 5 minutes in milliseconds

  /**
   * Creates a new ReportGeneratorProxy.
   * @param reportGeneratorService The actual report generator service.
   */
  constructor(private readonly reportGeneratorService: ReportGeneratorService) {}

  /**
   * Generates a report, using the cache if available.
   * @param report The report to generate.
   * @returns A promise that resolves to the generated report data.
   */
  public async generate(report: Report): Promise<ReportGeneratedResponseDto> {
    const reportId = report.getId();
    
    if (this.cache.has(reportId)) {
      const entry = this.cache.get(reportId)!;
      
      // Check if the cache entry is still valid
      if (Date.now() - entry.getTimestamp() < ReportGeneratorProxy.CACHE_LIFETIME) {
        return entry.getResponse();
      }
      
      // Remove expired cache entry
      this.cache.delete(reportId);
    }
    
    // Generate the report and cache the result
    const reportData = await this.reportGeneratorService.generate(report);
    this.cache.set(reportId, new CacheEntry(reportData, Date.now()));
    
    return reportData;
  }
}