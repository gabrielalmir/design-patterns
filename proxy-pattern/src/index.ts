import express from 'express';
import { Report } from './models/Report';
import { ReportRepository } from './repositories/ReportRepository';
import { ReportGeneratorService } from './services/ReportGeneratorService';
import { ReportGeneratorProxy } from './services/ReportGeneratorProxy';
import { ReportGeneratorController } from './controllers/ReportGeneratorController';

const app = express();
app.use(express.json());

const reportRepository = new ReportRepository();
const reportGeneratorService = new ReportGeneratorService();
const reportGeneratorProxy = new ReportGeneratorProxy(reportGeneratorService);

const reportGeneratorController = new ReportGeneratorController(
  reportRepository,
  reportGeneratorProxy
);

app.post('/reports', reportGeneratorController.createReport);
app.get('/reports/:id/generate', reportGeneratorController.generateReport);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('  POST /reports - Create a new report');
  console.log('  GET /reports/:id/generate - Generate a report');
});

const demonstrateProxyPattern = async () => {
  console.log('\nDemonstrating Proxy Pattern:');

  const report = new ReportRepository().save(new Report());
  console.log(`Created report with ID: ${report.getId()}`);

  console.log('\nFirst call (no cache):');
  console.time('First call');
  await reportGeneratorProxy.generate(report);
  console.timeEnd('First call');

  console.log('\nSecond call (using cache):');
  console.time('Second call');
  await reportGeneratorProxy.generate(report);
  console.timeEnd('Second call');

  console.log('\nWaiting for cache to expire (5 minutes)...');
  console.log('(This is just a demonstration, we won\'t actually wait)');
};

// demonstrateProxyPattern();

// Export for testing
export { app };
