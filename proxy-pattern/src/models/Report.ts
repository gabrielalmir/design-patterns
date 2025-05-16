/**
 * Represents a report entity.
 */
export class Report {
  private id: number;

  constructor(id?: number) {
    this.id = id || 0;
  }

  /**
   * Gets the ID of the report.
   * @returns The report ID.
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Sets the ID of the report.
   * @param id The report ID.
   */
  public setId(id: number): void {
    this.id = id;
  }
}