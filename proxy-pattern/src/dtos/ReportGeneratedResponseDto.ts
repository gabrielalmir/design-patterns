/**
 * Data transfer object for report generation response.
 */
export class ReportGeneratedResponseDto {
  /**
   * Creates a new ReportGeneratedResponseDto.
   * @param id The ID of the generated report.
   */
  constructor(public readonly id: number) {}
}