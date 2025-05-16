import { Report } from '../models/Report';
import { ReportGeneratedResponseDto } from '../dtos/ReportGeneratedResponseDto';
import { ReportGeneratorInterface } from './ReportGeneratorInterface';

/**
 * Service for generating reports.
 * This is a slow operation that takes 5 seconds to complete.
 */
export class ReportGeneratorService implements ReportGeneratorInterface {
  /**
   * Generates a report.
   * @param report The report to generate.
   * @returns A promise that resolves to the generated report data.
   */
  public async generate(report: Report): Promise<ReportGeneratedResponseDto> {
    // Simulate a time-consuming operation
    await new Promise(resolve => setTimeout(resolve, 5000));
    return new ReportGeneratedResponseDto(report.getId());
  }
}