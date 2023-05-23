import { CtUomModule } from './ct-uom.module';

describe('CtUomModule', () => {
  let ctUomModule: CtUomModule;

  beforeEach(() => {
    ctUomModule = new CtUomModule();
  });

  it('should create an instance', () => {
    expect(ctUomModule).toBeTruthy();
  });
});
