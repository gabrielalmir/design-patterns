import { Request, Response } from 'express';
import { Report } from '../models/Report';
import { ReportGeneratorInterface } from '../services/ReportGeneratorInterface';
import { ReportRepository } from '../repositories/ReportRepository';

/**
 * Controller for report generation operations.
 */
export class ReportGeneratorController {
  /**
   * Creates a new ReportGeneratorController.
   * @param reportRepository The repository for managing reports.
   * @param reportGenerator The report generator service (proxy).
   */
  constructor(
    private readonly reportRepository: ReportRepository,
    private readonly reportGenerator: ReportGeneratorInterface
  ) {}

  /**
   * Creates a new report.
   * @param req The HTTP request.
   * @param res The HTTP response.
   */
  public createReport = (req: Request, res: Response): void => {
    const createdReport = this.reportRepository.save(new Report());
    res.status(201).json(createdReport);
  };

  /**
   * Generates a report.
   * @param req The HTTP request.
   * @param res The HTTP response.
   */
  public generateReport = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id, 10);
    const report = this.reportRepository.findById(id);

    if (!report) {
      res.status(404).json({ message: 'Report not found' });
      return;
    }

    try {
      const reportData = await this.reportGenerator.generate(report);
      res.status(200).json(reportData);
    } catch (error) {
      console.error('Error generating report:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}