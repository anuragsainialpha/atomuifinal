import { CtUomMapModule } from './ct-uom-map.module';

describe('CtUomMapModule', () => {
  let ctUomMapModule: CtUomMapModule;

  beforeEach(() => {
    ctUomMapModule = new CtUomMapModule();
  });

  it('should create an instance', () => {
    expect(ctUomMapModule).toBeTruthy();
  });
});
