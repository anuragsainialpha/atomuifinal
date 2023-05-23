import { ExportTruckingModule } from './export-trucking.module';

describe('ExportTruckingModule', () => {
  let exportTruckingModule: ExportTruckingModule;

  beforeEach(() => {
    exportTruckingModule = new ExportTruckingModule();
  });

  it('should create an instance', () => {
    expect(exportTruckingModule).toBeTruthy();
  });
});
