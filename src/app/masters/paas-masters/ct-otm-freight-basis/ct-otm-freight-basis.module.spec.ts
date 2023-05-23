import { CtOtmFreightBasisModule } from './ct-otm-freight-basis.module';

describe('CtOtmFreightBasisModule', () => {
  let ctOtmFreightBasisModule: CtOtmFreightBasisModule;

  beforeEach(() => {
    ctOtmFreightBasisModule = new CtOtmFreightBasisModule();
  });

  it('should create an instance', () => {
    expect(ctOtmFreightBasisModule).toBeTruthy();
  });
});
