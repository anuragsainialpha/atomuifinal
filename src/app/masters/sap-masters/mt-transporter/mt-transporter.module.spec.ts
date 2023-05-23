import { MtTransporterModule } from './mt-transporter.module';

describe('MtTransporterModule', () => {
  let mtTransporterModule: MtTransporterModule;

  beforeEach(() => {
    mtTransporterModule = new MtTransporterModule();
  });

  it('should create an instance', () => {
    expect(mtTransporterModule).toBeTruthy();
  });
});
