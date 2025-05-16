import { ReportGeneratedResponseDto } from '../dtos/ReportGeneratedResponseDto';

/**
 * Represents a cache entry for report generation responses.
 */
export class CacheEntry {
  /**
   * Creates a new CacheEntry.
   * @param response The report generation response.
   * @param timestamp The timestamp when the entry was created.
   */
  constructor(
    private readonly response: ReportGeneratedResponseDto,
    private readonly timestamp: number
  ) {}

  /**
   * Gets the report generation response.
   * @returns The report generation response.
   */
  public getResponse(): ReportGeneratedResponseDto {
    return this.response;
  }

  /**
   * Gets the timestamp when the entry was created.
   * @returns The timestamp.
   */
  public getTimestamp(): number {
    return this.timestamp;
  }
}