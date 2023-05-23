import { UploadMtTruckTypeModule } from './upload-mt-truck-type.module';

describe('UploadMtTruckTypeModule', () => {
  let uploadMtTruckTypeModule: UploadMtTruckTypeModule;

  beforeEach(() => {
    uploadMtTruckTypeModule = new UploadMtTruckTypeModule();
  });

  it('should create an instance', () => {
    expect(uploadMtTruckTypeModule).toBeTruthy();
  });
});
