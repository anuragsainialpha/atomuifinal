import { UploadMtElrModule } from './upload-mt-elr.module';

describe('UploadMtElrModule', () => {
  let uploadMtElrModule: UploadMtElrModule;

  beforeEach(() => {
    uploadMtElrModule = new UploadMtElrModule();
  });

  it('should create an instance', () => {
    expect(uploadMtElrModule).toBeTruthy();
  });
});
