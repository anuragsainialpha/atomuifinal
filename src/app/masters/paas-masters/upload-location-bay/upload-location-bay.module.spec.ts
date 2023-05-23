import { UploadLocationBayModule } from './upload-location-bay.module';

describe('UploadLocationBayModule', () => {
  let uploadLocationBayModule: UploadLocationBayModule;

  beforeEach(() => {
    uploadLocationBayModule = new UploadLocationBayModule();
  });

  it('should create an instance', () => {
    expect(uploadLocationBayModule).toBeTruthy();
  });
});
