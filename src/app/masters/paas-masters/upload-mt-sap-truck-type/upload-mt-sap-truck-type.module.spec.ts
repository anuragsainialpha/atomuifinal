import { UploadMtSapTruckTypeModule } from './upload-mt-sap-truck-type.module';

describe('UploadMtSapTruckTypeModule', () => {
  let uploadMtSapTruckTypeModule: UploadMtSapTruckTypeModule;

  beforeEach(() => {
    uploadMtSapTruckTypeModule = new UploadMtSapTruckTypeModule();
  });

  it('should create an instance', () => {
    expect(uploadMtSapTruckTypeModule).toBeTruthy();
  });
});
