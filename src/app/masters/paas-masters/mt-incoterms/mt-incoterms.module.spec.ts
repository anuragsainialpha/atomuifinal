import { MtIncotermsModule } from './mt-incoterms.module';

describe('MtIncotermsModule', () => {
  let mtIncotermsModule: MtIncotermsModule;

  beforeEach(() => {
    mtIncotermsModule = new MtIncotermsModule();
  });

  it('should create an instance', () => {
    expect(mtIncotermsModule).toBeTruthy();
  });
});
