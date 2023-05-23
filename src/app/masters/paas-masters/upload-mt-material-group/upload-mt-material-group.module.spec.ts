import { UploadMtMaterialGroupModule } from './upload-mt-material-group.module';

describe('UploadMtMaterialGroupModule', () => {
  let uploadMtMaterialGroupModule: UploadMtMaterialGroupModule;

  beforeEach(() => {
    uploadMtMaterialGroupModule = new UploadMtMaterialGroupModule();
  });

  it('should create an instance', () => {
    expect(uploadMtMaterialGroupModule).toBeTruthy();
  });
});
