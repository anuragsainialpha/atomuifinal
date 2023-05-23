import { MtMaterialGroupModule } from './mt-material-group.module';

describe('MtMaterialGroupModule', () => {
  let mtMaterialGroupModule: MtMaterialGroupModule;

  beforeEach(() => {
    mtMaterialGroupModule = new MtMaterialGroupModule();
  });

  it('should create an instance', () => {
    expect(mtMaterialGroupModule).toBeTruthy();
  });
});
