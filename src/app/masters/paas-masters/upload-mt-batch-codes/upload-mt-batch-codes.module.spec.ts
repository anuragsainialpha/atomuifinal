import { UploadMtBatchCodesModule } from './upload-mt-batch-codes.module';

describe('UploadMtBatchCodesModule', () => {
  let uploadMtBatchCodesModule: UploadMtBatchCodesModule;

  beforeEach(() => {
    uploadMtBatchCodesModule = new UploadMtBatchCodesModule();
  });

  it('should create an instance', () => {
    expect(uploadMtBatchCodesModule).toBeTruthy();
  });
});
