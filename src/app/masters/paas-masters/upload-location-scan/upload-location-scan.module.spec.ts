import { UploadLocationScanModule } from './upload-location-scan.module';

describe('UploadLocationScanModule', () => {
  let uploadLocationScanModule: UploadLocationScanModule;

  beforeEach(() => {
    uploadLocationScanModule = new UploadLocationScanModule();
  });

  it('should create an instance', () => {
    expect(uploadLocationScanModule).toBeTruthy();
  });
});
