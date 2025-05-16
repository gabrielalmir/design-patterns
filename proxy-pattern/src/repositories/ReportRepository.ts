import { Report } from '../models/Report';

/**
 * Repository for managing reports.
 * This is a simple in-memory implementation.
 */
export class ReportRepository {
  private reports: Map<number, Report> = new Map();
  private nextId: number = 1;

  /**
   * Saves a report.
   * @param report The report to save.
   * @returns The saved report with an assigned ID.
   */
  public save(report: Report): Report {
    // If the report doesn't have an ID, assign one
    if (report.getId() === 0) {
      report.setId(this.nextId++);
    }
    
    this.reports.set(report.getId(), report);
    return report;
  }

  /**
   * Finds a report by ID.
   * @param id The ID of the report to find.
   * @returns The report if found, or undefined if not found.
   */
  public findById(id: number): Report | undefined {
    return this.reports.get(id);
  }
}