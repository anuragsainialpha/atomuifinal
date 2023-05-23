import { UploadMtLocationModule } from './upload-mt-location.module';

describe('UploadMtLocationModule', () => {
  let uploadMtLocationModule: UploadMtLocationModule;

  beforeEach(() => {
    uploadMtLocationModule = new UploadMtLocationModule();
  });

  it('should create an instance', () => {
    expect(uploadMtLocationModule).toBeTruthy();
  });
});
