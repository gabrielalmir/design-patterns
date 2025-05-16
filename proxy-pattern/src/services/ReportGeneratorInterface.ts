import { Report } from '../models/Report';
import { ReportGeneratedResponseDto } from '../dtos/ReportGeneratedResponseDto';

/**
 * Interface for report generation services.
 */
export interface ReportGeneratorInterface {
  /**
   * Generates a report.
   * @param report The report to generate.
   * @returns A promise that resolves to the generated report data.
   */
  generate(report: Report): Promise<ReportGeneratedResponseDto>;
}